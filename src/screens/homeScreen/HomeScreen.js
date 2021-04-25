import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/video/Video";
import "./_homeScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos,getVideosByCategory } from "../../redux/actions/video.action";
import InfiniteScroll from "react-infinite-scroll-component";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos , activeCategory } = useSelector((state) => state.homeVideos);
  const nextPageData = () => {
    if(activeCategory === "All"){
    dispatch(getPopularVideos());
    }
    else{
      dispatch(getVideosByCategory(activeCategory))
    }
  };

  return (
    <Container className="container">
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length}
        next={nextPageData}
        hasMore={true}
        className="row"
        loader={
          <div className="spinner-border text-danger d-block mx-auto "></div>
        }
      >
        {videos.map((video) => (
          <Col lg={3} md={3}>
            <Video video={video} key={videos.id} />
          </Col>
        ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
