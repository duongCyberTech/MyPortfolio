import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw, Download, Upload, Folder, File } from 'lucide-react';
import Loading from './Loading';


const PDFViewer = ({certiFile = '/file/oracle.pdf', certiName = 'Oracle Certification'}) => {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scale, setScale] = useState(1.0);
  const [rotation, setRotation] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [availableFiles, setAvailableFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const folderInputRef = useRef(null);

  // Sample PDF files that could be in your public folder
  const samplePDFs = [
    '/file/oracle.pdf',
    '/file/bosch.pdf'
  ];

  // Load PDF.js from CDN
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    };
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const loadPDFFromURL = async (url) => {
    if (!window.pdfjsLib) {
      setError('PDF.js is still loading. Please try again in a moment.');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const pdf = await window.pdfjsLib.getDocument(url).promise;
      
      setPdfDoc(pdf);
      setTotalPages(pdf.numPages);
      setCurrentPage(1);
      setScale(1.0);
      setRotation(0);
      setSelectedFile(url);
    } catch (err) {
      setError('Failed to load PDF: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadPDFFromFile = async (file) => {
    if (!window.pdfjsLib) {
      setError('PDF.js is still loading. Please try again in a moment.');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      
      setPdfDoc(pdf);
      setTotalPages(pdf.numPages);
      setCurrentPage(1);
      setScale(1.0);
      setRotation(0);
      setSelectedFile(file.name);
    } catch (err) {
      setError('Failed to load PDF: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderPage = async (pageNum) => {
    if (!pdfDoc || !canvasRef.current) return;

    try {
      const page = await pdfDoc.getPage(pageNum);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const viewport = page.getViewport({ scale, rotation });
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };

      await page.render(renderContext).promise;
    } catch (err) {
      setError('Failed to render page: ' + err.message);
    }
  };

  useEffect(() => {
    if (pdfDoc) {
      renderPage(currentPage);
    }
  }, [pdfDoc, currentPage, scale, rotation]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      loadPDFFromFile(file);
    } else {
      setError('Please select a valid PDF file.');
    }
  };

  const handleFolderChange = (event) => {
    const files = Array.from(event.target.files);
    const pdfFiles = files.filter(file => file.type === 'application/pdf');
    
    if (pdfFiles.length === 0) {
      setError('No PDF files found in the selected folder.');
      return;
    }

    setAvailableFiles(pdfFiles);
    setError('');
    
    // Auto-load the first PDF
    if (pdfFiles.length > 0) {
      loadPDFFromFile(pdfFiles[0]);
    }
  };

  const loadSamplePDF = async (url) => {
    await loadPDFFromURL(url);
  };

  const loadFileFromList = (file) => {
    loadPDFFromFile(file);
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const zoomIn = () => {
    setScale(Math.min(scale * 1.2, 3.0));
  };

  const zoomOut = () => {
    setScale(Math.max(scale / 1.2, 0.3));
  };

  const rotateDocument = () => {
    setRotation((rotation + 90) % 360);
  };

    useEffect(() => {
    const fetchPDF = async () => {
        if (certiFile) {
        await loadSamplePDF(certiFile);
        }
    };

    fetchPDF();
    }, [certiFile]);

  return (
    <div    
        style={{
            width: '100%',
            maxWidth: '112rem',
            margin: '0 auto',
            backgroundColor: '#1f2937',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden'
        }}    
    >
      {/* Header */}
        <div style={{ backgroundColor: '#1f2937', color: 'white', padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{certiName}</h2>
            </div>
        </div>


        <div style={{ display: 'flex' }}>
        {/* Main Content */}
        <div style={{ flex: 1 }}>
        {/* Toolbar */}
        {pdfDoc && (
            <div style={{   backgroundColor: '#314158', borderBottom: '1px solid #e5e7eb', padding: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button
                    onClick={goToPrevious}
                    disabled={currentPage <= 1}
                    style={{
                    padding: 8,
                    borderRadius: 4,
                    backgroundColor: '#314158',
                    opacity: currentPage <= 1 ? 0.5 : 1,
                    cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.2s',
                    color: '#ffffff',
                    }}
                    onMouseOver={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#e5e7eb')}
                    onMouseOut={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '')}
                >
                    <ChevronLeft size={20} />
                </button>

                <span style={{ fontSize: '0.875rem', fontWeight: 500, padding: '0 12px' }}>
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    onClick={goToNext}
                    disabled={currentPage >= totalPages}
                    style={{
                    padding: 8,
                    borderRadius: 4,
                    backgroundColor: '#314158',
                    opacity: currentPage >= totalPages ? 0.5 : 1,
                    cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.2s',
                    color: '#ffffff',
                    }}
                    onMouseOver={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#e5e7eb')}
                    onMouseOut={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '')}
                >
                    <ChevronRight size={20} />
                </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button
                    onClick={zoomOut}
                    style={{
                    padding: 8,
                    borderRadius: 4,
                    transition: 'background-color 0.2s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e5e7eb')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
                >
                    <ZoomOut size={20} />
                </button>

                <span style={{ fontSize: '0.875rem', fontWeight: 500, padding: '0 8px' }}>
                    {Math.round(scale * 100)}%
                </span>

                <button
                    onClick={zoomIn}
                    style={{
                    padding: 8,
                    borderRadius: 4,
                    transition: 'background-color 0.2s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e5e7eb')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
                >
                    <ZoomIn size={20} />
                </button>

                <button
                    onClick={rotateDocument}
                    style={{
                    padding: 8,
                    borderRadius: 4,
                    transition: 'background-color 0.2s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e5e7eb')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
                >
                    <RotateCw size={20} />
                </button>
                </div>
            </div>

            {selectedFile && (
                <div style={{ marginTop: 8, fontSize: '0.875rem', color: '#4b5563' }}>
                <strong>Current file:</strong> {typeof selectedFile === 'string' ? selectedFile.split('/').pop() : selectedFile}
                </div>
            )}
            </div>
        )}

        {/* Content Area */}
        <div style={{ padding: 16 }}>
            {loading && !pdfDoc && (<Loading />)}

            {error && !pdfDoc && (<Loading />)}

            {!pdfDoc && !loading && !error && (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div
                style={{
                    backgroundColor: '#314158',
                    border: '2px dashed #d1d5db',
                    borderRadius: 8,
                    padding: 32,
                }}
                >
                <Folder size={48} style={{ display: 'block', margin: '0 auto 16px', color: '#9ca3af' }} />
                <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#374151', marginBottom: 8 }}>
                    Select PDF Files or Folders
                </h3>
                <p style={{ color: '#6b7280', marginBottom: 16 }}>
                    Choose individual PDFs or entire folders containing PDF files
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
                    <button
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#314158',
                        color: '#90A1B9',
                        borderRadius: 4,
                        cursor: 'pointer',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
                    >
                    Select PDF File
                    </button>
                    <button
                    onClick={() => folderInputRef.current?.click()}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#16a34a',
                        color: '#90A1B9',
                        borderRadius: 4,
                        cursor: 'pointer',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#15803d')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#16a34a')}
                    >
                    Select Folder
                    </button>
                </div>
                </div>
            </div>
            )}

            {pdfDoc && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ border: '1px solid #d1d5db', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                <canvas
                    ref={canvasRef}
                    style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                />
                </div>
            </div>
            )}
        </div>
        </div>

      </div>
    </div>
  );
};

export default PDFViewer;