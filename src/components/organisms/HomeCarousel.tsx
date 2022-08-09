import { Box, Img, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useLinkPostDetail } from "../../hooks/useLinkPostDetail";
import { PostsContext } from "../../providers/PostsProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

export const HomeCarousel = () => {
  const { posts } = useContext(PostsContext);
  const caroucelPosts = posts.slice(-5);
  const { LinkDetail } = useLinkPostDetail();
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <SliderWrapper>
        <Slider {...settings}>
          {caroucelPosts.map((post) => (
            <Box
              padding="10px"
              pb="0"
              key={post.id}
              cursor="pointer"
              onClick={() => LinkDetail(post.id)}
            >
              <Img
                src={post.imgPath}
                alt="pictuer"
                objectFit="cover"
                height="200px"
                width="100%"
              />
              <Text pt="0.5em" fontWeight="bold">
                {post.title}
              </Text>
            </Box>
          ))}
        </Slider>
      </SliderWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SliderWrapper = styled.div`
  width: calc(100% - 80px);
  padding-bottom: 24px;
  margin-bottom: 20px;
  .slick-prev:before,
  .slick-next:before {
    position: relative;
    color: white;
    background-color: orange;
    padding: 5px 10px 10px 10px;
    border-radius: 5px;
  }
  .slick-prev {
    left: -35px;
  }
  .slick-prev:before {
    content: "<";
  }
  .slick-next:before {
    content: ">";
  }
`;
