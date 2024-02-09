import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideFromBottomProps {
	children: ReactNode;
	className?: string;
}

const SlideFromBottom: React.FC<SlideFromBottomProps> = ({
	children,
	className,
}) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1 }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	);
};

export default SlideFromBottom;
