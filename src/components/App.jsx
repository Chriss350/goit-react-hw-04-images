// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { ThreeCircles } from 'react-loader-spinner';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGallery/ImageGalleryItem';
// import { Navbar } from './Navbar/Navbar';
// import { Search } from 'components/Search/Search';
// import { LoadMore } from './Button/LoadMore';
// import { Modal } from './Modal/Modal';

export const App = () => {
  // const [page, setPage] = useState(1);
  // const [images, setImages] = useState([]);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [searchInput, setSearchInput] = useState('');
  // const [largeImg, setLargeImg] = useState('');
  // const [largeImgAlt, setLargeImgAlt] = useState('');
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [totalImages, setTotalImages] = useState(0);
  // const [imagesDisplayed, setImagesDisplayed] = useState(0);
  // const fetchImages = (searchValue, pageNum) => {
  //   try {
  //     fetch(
  //       `https://pixabay.com/api/?&key=24785169-ce0e5464f046c25feb9965069&q=${searchValue}&page=${pageNum}&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //       .then(data => data.json())
  //       .then(data => {
  //         setTotalImages(data.total);
  //         page === 1
  //           ? setImages(data.hits)
  //           : setImages([...images, ...data.hits]);
  //         page === 1
  //           ? setImagesDisplayed(data.hits.length)
  //           : setImagesDisplayed(imagesDisplayed + data.hits.length);
  //       })
  //       .finally(() => setIsLoaded(true));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchImages(searchInput, page);
  // }, [searchInput, page]);
  // const changeHandler = e => {
  //   const value = e.target.value;
  //   setSearchInput(value);
  // };
  // const submitHandler = e => {
  //   e.preventDefault();
  //   setPage(1);
  //   fetchImages(searchInput, page);
  // };
  // const loadMoreHandler = e => {
  //   e.preventDefault();
  //   setPage(page => page + 1);
  // };
  // const closeModalHandler = e => {
  //   if (e.code === 'Escape') {
  //     setIsModalOpen(false);
  //   }
  //   setIsModalOpen(false);
  // };
  // const openModalHandler = e => {
  //   if (e.target.nodeName !== 'IMG') {
  //     return;
  //   }
  //   setLargeImg(e.target.src);
  //   setLargeImgAlt(e.target.alt);
  //   setIsModalOpen(true);
  // };
  // window.addEventListener('keydown', closeModalHandler);
  // return (
  //   <>
  //     <Navbar>
  //       <Search changeHandler={changeHandler} submitHandler={submitHandler} />
  //     </Navbar>
  //     <div className="container text-center pt-3">
  //       {isLoaded === true ? (
  //         <ImageGallery openModal={openModalHandler}>
  //           <ImageGalleryItem images={images} />
  //         </ImageGallery>
  //       ) : (
  //         <ThreeCircles
  //           height="100"
  //           width="100"
  //           color="#343a40"
  //           wrapperClass="justify-content-center"
  //           visible={true}
  //           ariaLabel="three-circles-rotating"
  //         />
  //       )}
  //       {imagesDisplayed === totalImages ? (
  //         <></>
  //       ) : (
  //         <LoadMore onClick={loadMoreHandler} />
  //       )}
  //       {isModalOpen === true ? (
  //         <Modal
  //           closeModal={closeModalHandler}
  //           img={largeImg}
  //           alt={largeImgAlt}
  //         />
  //       ) : (
  //         <></>
  //       )}
  //     </div>
  //   </>
  // );
};
App.propTypes = {
  page: PropTypes.number,
  images: PropTypes.array,
  isLoaded: PropTypes.bool,
  searchInput: PropTypes.string,
  largeImg: PropTypes.string,
  largeImgAlt: PropTypes.string,
  isModalOpen: PropTypes.bool,
  totalImages: PropTypes.number,
  imagesDisplayed: PropTypes.number,
};
