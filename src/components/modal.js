'use client'; // if using App Router

import { useState } from 'react';
import Image from 'next/image';
import styles from './ImageModal.module.css';

export default function ImageModal({ src, alt, ...props}) { //width, height, ...props }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);
    const [isHoveringImage, setIsHoveringImage] = useState(false);

    const handleBackdropClick = (e) => {

        if (e.target === e.currentTarget) {
            handleCloseModal();
        }
    };

    const handleEscapeKey = (e) => {
        if (e.key === 'Escape') {
            handleCloseModal();
        }
    };

    return (
        <>
            <div className={styles.thumbnailWrapper}>
                <Image
                    src={src}
                    alt={alt}
                    fill={true}
                    objectFit="contain"
                    onClick={handleOpenModal}
                    className={styles.thumbnail}
                    {...props}
                />
            </div>

            {isOpen && (
                <div
                    className={`${styles.backdrop} ${isHoveringImage ? styles.backdropDark : styles.backdropLight}`}
                    onClick={handleBackdropClick}
                    onKeyDown={handleEscapeKey}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Modal showing enlarged ${alt}`}
                >
                    <div className={styles.modalContent}
                        onMouseEnter={() => setIsHoveringImage(true)}
                        onMouseLeave={() => setIsHoveringImage(false)}>
                        <Image
                            src={src}
                            alt={alt}
                            width={0} // can just set this to whatever, it's getting overriden in css anyway :P
                            height={0}
                            className={styles.enlargedImage}
                            priority
                        />
                        <div className={styles.altText}>
                            <p>{alt}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
