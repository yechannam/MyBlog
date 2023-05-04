import PostList from "components/Main/PostList";
import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react";
import { PostListItemType } from "types/PostItem.types";

export type useInfiniteScrollType = {
	containerRef : MutableRefObject<HTMLDivElement | null>
	postList: PostListItemType[]
}

const NUMBER_OF_ITEMS_PER_PAGE = 10

const useInfiniteScroll = function(seletedCategory : string, posts: PostListItemType[],): useInfiniteScrollType {
	const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null,)

	const [count, setCount] = useState<number>(1)
	
	const postListByCategory = useMemo<PostListItemType[]>(
		() =>
		posts.filter(({ node : { frontmatter: {categories
		} } }: PostListItemType) =>
			seletedCategory !== 'All'
				? categories.includes(seletedCategory)
				: true, 
			),
			[seletedCategory],
	)

	const observer: IntersectionObserver = new IntersectionObserver((entries, observer) => {
		if (!entries[0].isIntersecting) return ;

		setCount(value => value + 1);
		observer.disconnect();
		},
	)

	useEffect(() => setCount(1), [seletedCategory])

	useEffect(() => {
		if (
			NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
			containerRef.current === null ||
			containerRef.current.children.length === 0
		)
		return

		observer.observe(
			containerRef.current.children[containerRef.current.children.length - 1],
		)
	}, [count, seletedCategory])

	return {
		containerRef,
		postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
	}
}

export default useInfiniteScroll

