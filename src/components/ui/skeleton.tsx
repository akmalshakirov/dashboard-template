type SkeletonProps = {
    width?: number;
    height?: number;
    className?: string;
};

export const Skeleton = ({ className, height, width }: SkeletonProps) => {
    return (
        <div
            className={`${className} bg-white/50 animate-pulse rounded-lg`}
            style={{
                width: width,
                height: height,
            }}
        />
    );
};
