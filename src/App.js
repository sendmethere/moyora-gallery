import React, {Component} from 'react';
import { Link, Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import { createBrowserHistory } from "history";

import Header from './frame/Header';
import Footer from './frame/Footer';

import Home from './pages/Home';

import Gallery from './pages/Gallery';
import GallerySetting from './pages/GallerySetting';

import NoticeList from './pages/NoticeList';
import NoticeDetail from './pages/NoticeDetail';

import Help from './pages/Help';

import Join from './pages/Join';
import Login from './pages/Login';
import Mypage from './pages/Mypage';

import NotFound from './pages/NotFound';

const history = createBrowserHistory();

const App = () => {
  return (
    <div className='App'>
        <Header/>
          <Routes>
            <Route exact path="/" element={Home()} /> // 메인페이지

            <Route path="/gallery/:id" element={Gallery()} /> // 갤러리 보기
            <Route path="/gallery/settings/:id" element={GallerySetting()} /> // 갤러리 만들기/수정

            <Route path="/notice" element={NoticeList()} /> // 공지사항 목록
            <Route path="/notice/:id" element={NoticeDetail()} /> // 공지사항 보기

            <Route path="/help" element={Help()} /> // 사용법
            
            
            <Route path="/mypage" element={Mypage()} /> // 마이페이지
            <Route path="/login" element={Login()} /> // 로그인
            <Route path="/join" element={Join()} /> // 회원가입
            
            <Route element={NotFound()}/> // 없는 페이지
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;