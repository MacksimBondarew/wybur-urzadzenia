interface IIconProps {
    styles?: React.CSSProperties;
    width?: number;
    height?: number;
    iconId: string;
}

const Icon = ({ styles, width, height, iconId }: IIconProps) => (
    <svg style={styles} width={width} height={height}>
        <use href={`#${iconId}`} />
    </svg>
);

export { Icon };
