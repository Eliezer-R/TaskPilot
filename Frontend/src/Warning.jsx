import { useState, useEffect } from 'react';

export default function BackendWarningToast() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {

    const fadeTimer = setTimeout(() => {
      setIsExiting(true);
    }, 6000);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 6500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        .backend-warning-container {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          z-index: 50;
          pointer-events: none;
          padding: 1.5rem 1rem;
        }

        .backend-warning-toast {
          pointer-events: auto;
          backdrop-filter: blur(20px);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
          border-radius: 1rem;
          padding: 1rem 1.5rem;
          max-width: 28rem;
          width: 100%;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 1;
          transform: translateY(0) scale(1);
          position: relative;
          overflow: hidden;
        }

        .backend-warning-toast.exiting {
          opacity: 0;
          transform: translateY(-20px) scale(0.95);
        }

        @media (prefers-color-scheme: dark) {
          .backend-warning-toast {
            background: linear-gradient(135deg, rgba(17, 24, 39, 0.9), rgba(31, 41, 55, 0.7));
            border-color: rgba(55, 65, 81, 0.5);
          }
        }

        .toast-content {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .toast-icon-wrapper {
          flex-shrink: 0;
          position: relative;
        }

        .toast-icon-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #fbbf24, #f97316);
          border-radius: 9999px;
          filter: blur(12px);
          opacity: 0.5;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .toast-icon {
          position: relative;
          background: linear-gradient(135deg, #fbbf24, #f97316);
          border-radius: 9999px;
          padding: 0.625rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .toast-text-content {
          flex: 1;
          min-width: 0;
        }

        .toast-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
        }

        .toast-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #111827;
        }

        @media (prefers-color-scheme: dark) {
          .toast-title {
            color: #ffffff;
          }
        }

        .toast-description {
          font-size: 0.75rem;
          color: #4b5563;
          line-height: 1.5;
        }

        @media (prefers-color-scheme: dark) {
          .toast-description {
            color: #d1d5db;
          }
        }

        .toast-highlight {
          font-weight: 600;
          color: #d97706;
        }

        @media (prefers-color-scheme: dark) {
          .toast-highlight {
            color: #fbbf24;
          }
        }

        .toast-progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: rgba(229, 231, 235, 0.5);
          border-radius: 0 0 1rem 1rem;
          overflow: hidden;
        }

        @media (prefers-color-scheme: dark) {
          .toast-progress-bar {
            background: rgba(55, 65, 81, 0.5);
          }
        }

        .toast-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #fbbf24, #f97316, #fbbf24);
          background-size: 200% 100%;
          animation: progress 5s linear forwards, shimmer 1.5s infinite;
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.7;
          }
        }

        @media (max-width: 375px) {
          .backend-warning-container {
            padding: 1rem 0.75rem;
          }

          .backend-warning-toast {
            padding: 0.875rem 1rem;
            border-radius: 0.875rem;
          }

          .toast-content {
            gap: 0.75rem;
          }

          .toast-icon {
            padding: 0.5rem;
          }

          .toast-title {
            font-size: 0.8125rem;
          }

          .toast-description {
            font-size: 0.6875rem;
          }

          .toast-progress-bar {
            height: 3px;
          }
        }
      `}</style>

      <div className="backend-warning-container">
        <div className={`backend-warning-toast ${isExiting ? 'exiting' : ''}`}>
          <div className="toast-content">
         
            <div className="toast-icon-wrapper">
              <div className="toast-icon-glow"></div>
              <div className="toast-icon">
                <span style={{ fontSize: '1.25rem' }}>⏱️</span>
              </div>
            </div>

          
            <div className="toast-text-content">
              <div className="toast-header">
                <h3 className="toast-title">
                  Espera...
                </h3>
                <span style={{ fontSize: '1rem' }}>⚡</span>
              </div>
              <p className="toast-description">
                El servidor puede tardar <span className="toast-highlight">1-2 minutos</span> en activarse desde el modo de espera (Render free tier).
              </p>
            </div>
          </div>

          
          <div className="toast-progress-bar">
            <div className="toast-progress-fill"></div>
          </div>
        </div>
      </div>
    </>
  );
}
