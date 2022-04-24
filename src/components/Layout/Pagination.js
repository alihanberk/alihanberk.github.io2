import React, { useEffect } from 'react';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, prevPage, setPage } from 'store/slices/pagination';
import { setCurrentTeam } from 'store/slices/teams';
import { useLocation, useNavigate } from 'react-router-dom';

const Pagination = ({ children }) => {

  const
    dispatch = useDispatch(),
    navigate = useNavigate(),
    { pathname } = useLocation(),
    currentIndex = parseInt(pathname.split("/")[1] || 0),
    { currentPage, teamList } = useSelector(({ pagination, teams }) => ({ currentPage: pagination.page, teamList: teams.list })),

    NextPage = () => (
      currentPage < teamList.length &&
      <div className="pagination__next" onClick={() => dispatch(nextPage())}>
        <ArrowRightOutlined /> <span className={currentPage === 0 ? "" : "hide"}>Next Page</span>
      </div>
    ),

    PrevPage = () => (
      currentPage > 0 &&
      <div className="pagination__prev" onClick={() => dispatch(prevPage())}>
        <ArrowLeftOutlined />
      </div>
    );

  useEffect(() => {
    if (currentPage > 0) {
      const team = teamList.find(x => x.id === currentPage);
      dispatch(setCurrentTeam(team))
      navigate(`/${team.id}/${team.pathName}`);
    }
    else
      navigate("/");
  }, [currentPage, navigate, teamList, dispatch]);

  useEffect(() => {
    dispatch(setPage(currentIndex));
  }, [dispatch, currentIndex])


  return (
    <div className="pagination">
      <PrevPage />
      {children}
      <NextPage />
    </div>
  )
}

export default Pagination;