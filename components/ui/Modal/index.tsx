import { AnimatePresence } from 'framer-motion';
import { FC, UIEvent, useRef } from 'react';

import { LinkIcon } from '@/components/ui/LinkIcon';

import { ModalBody, ModalHeader, ModalWindow, ModalWrapper, windowVariants, wrapperVariants } from './styled';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children: React.ReactNode;
	size?: 'sm' | 'md' | 'lg';
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
	const wrapperRef = useRef(null);

	const handleClose = (e: UIEvent) => {
		if (e.target === wrapperRef.current) onClose();
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<ModalWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
					transition={{
						duration: 0.15,
					}}
					onMouseDown={handleClose}
					ref={wrapperRef}
				>
					<ModalWindow variants={windowVariants}>
						<LinkIcon icon="times-small" onClick={onClose} />
						{title && <ModalHeader>{title}</ModalHeader>}
						<ModalBody>{children}</ModalBody>
					</ModalWindow>
				</ModalWrapper>
			)}
		</AnimatePresence>
	);
};

export default Modal;
