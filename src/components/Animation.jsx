import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloseRounded } from '@mui/icons-material';
import {cards} from '../data/data';

const CardLayout = ({ptype}) => {
  const [selectedCard, setSelectedCard] = useState(null);


  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.03,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 100
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const cardStyles = {
    container: {
      padding: '40px 20px',
      background: '#314158',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '24px',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    card: {
      borderRadius: '24px',
      overflow: 'hidden',
      cursor: 'pointer',
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '320px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)'
    },
    cardLarge: {
      gridColumn: 'span 2',
      minHeight: '400px'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '32px',
      background: 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
    },
    category: {
      fontSize: '12px',
      fontWeight: '700',
      color: 'rgba(255,255,255,0.9)',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '12px',
      padding: '8px 16px',
      background: 'rgba(255,255,255,0.15)',
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)',
      display: 'inline-block'
    },
    title: {
      fontSize: '28px',
      fontWeight: '800',
      color: 'white',
      lineHeight: '1.2',
      textShadow: '0 4px 8px rgba(0,0,0,0.3)',
      marginTop: 'auto'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    },
    modalBackdrop: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(8px)'
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '28px',
      maxWidth: '700px',
      width: '100%',
      maxHeight: '85vh',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 30px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)',
      backdropFilter: 'blur(20px)'
    },
    modalImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover'
    },
    modalBody: {
      padding: '40px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
    },
    modalCategory: {
      fontSize: '12px',
      fontWeight: '700',
      color: '#6366f1',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '12px',
      padding: '6px 12px',
      background: 'rgba(99, 102, 241, 0.1)',
      borderRadius: '12px',
      display: 'inline-block'
    },
    modalTitle: {
      fontSize: '32px',
      fontWeight: '800',
      color: '#1e293b',
      marginBottom: '24px',
      lineHeight: '1.2'
    },
    modalDescription: {
      fontSize: '18px',
      lineHeight: '1.7',
      color: '#475569',
      whiteSpace: 'pre-line'
    },
    closeButton: {
      position: 'absolute',
      top: '24px',
      right: '24px',
      background: 'rgba(255,255,255,0.95)',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '59.59px',
      cursor: 'pointer',
      fontSize: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#374151',
      boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)'
    }
  };

  return (
    <div style={cardStyles.container}>
      <motion.div 
        style={cardStyles.grid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cards.filter((card) => card.ptype === ptype).map((card) => (
          <motion.div
            key={card.id}
            style={{
              ...cardStyles.card,
              ...(card.size === 'large' ? cardStyles.cardLarge : {}),
              backgroundImage: `url(${card.image})`
            }}
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => openModal(card)}
            layoutId={`card-${card.id}`}
          >
            <motion.div 
              style={cardStyles.overlay}
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div style={cardStyles.category}>{card.category}</div>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 style={cardStyles.title}>{card.title}</h3>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedCard && (
          <motion.div 
            style={cardStyles.modal}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              style={cardStyles.modalBackdrop}
              onClick={closeModal}
            />
            <motion.div 
              style={cardStyles.modalContent}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layoutId={`card-${selectedCard.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                style={cardStyles.closeButton}
                onClick={closeModal}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 90,
                  background: 'rgba(255,255,255,1)'
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 500,
                  damping: 30,
                  delay: 0.2
                }}
              >
                <CloseRounded />
              </motion.button>
              
              <motion.img
                src={selectedCard.image}
                alt={selectedCard.title}
                style={cardStyles.modalImage}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              
              <motion.div 
                style={cardStyles.modalBody}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.div 
                  style={cardStyles.modalCategory}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  {selectedCard.category}
                </motion.div>
                
                <motion.h2 
                  style={cardStyles.modalTitle}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {selectedCard.title}
                </motion.h2>
                
                <motion.p 
                  style={cardStyles.modalDescription}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {selectedCard.description}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardLayout;