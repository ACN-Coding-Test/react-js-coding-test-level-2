import React from "react";

interface TextWithEllipsisProps {
    text: string;
    numberOfLines: number;
}

const TextWithEllipsis: React.FC<TextWithEllipsisProps> = ({ text, numberOfLines }) => {
    return (
        <div className="text-ellipsis text-black text-sm" style={{
            display: "-webkit-box",
            WebkitLineClamp: numberOfLines,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
        }}>
            {text}
        </div>
    );
}

export default TextWithEllipsis;
