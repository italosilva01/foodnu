"use client"
import { useEffect, useRef } from "react";

export const useInfiniteScroll = ({ hasMore, isLoading, onLoadMore }: { hasMore: boolean, isLoading: boolean, onLoadMore: () => void }) => {
    const observerTarget = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore && !isLoading) {
                onLoadMore();
            }
        }, {
            threshold: 0.1
        });

        if (observerTarget.current) {
            observer.observe(observerTarget.current)
        }

        return () => { observer.disconnect() };
    }, [hasMore, isLoading, onLoadMore]);

    return { observerTarget };
}