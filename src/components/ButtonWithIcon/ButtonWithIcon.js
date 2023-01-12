import Button from "react-bootstrap/Button";

function ButtonWithIcon(props) {
	const { children, variant, size, className } = props || false;
	return (
		<Button
			variant={variant}
			size={size}
			className={`d-flex justify-content-center align-items-center ${className}`}
		>
			{children}
		</Button>
	);
}

export default ButtonWithIcon;
