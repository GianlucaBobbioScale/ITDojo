import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";

export const ButtonArray = ({ actions, variant }) => {
	return (
		<ButtonGroup variant={variant}>
			{actions.map((e) => (
				<Button
					onClick={e?.actionOnClick}
					color={e?.color}
					disabled={e?.disabled}
					key={e.buttonContent}
				>
					{e?.buttonContent}
				</Button>
			))}
		</ButtonGroup>
	);
};
