import CodeSnippetShowcase from "./snippet";
import PDFViewer from "./PDFViewer";

const Education = ({ data }) => {
    if (!data) return null; // Kiểm tra nếu không có dữ liệu
    console.log(data);
    return (
        <CodeSnippetShowcase dataGen={data} />
    );
};

const Certifications = ({ data }) => {
    if (!data) return null; // Kiểm tra nếu không có dữ liệu
    console.log(data);
    return (
        <div style={{padding: '20px', textAlign: 'center', maxHeight:'calc(100vh - 112px)', overflowY: 'auto'}}>
            <PDFViewer certiFile={data.filepath} certiName={data.label} />
        </div>
    );
};

export { Education, Certifications };