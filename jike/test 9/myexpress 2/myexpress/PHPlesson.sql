-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-05-12 09:12:29
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `PHPlesson`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `newsid` int(11) NOT NULL,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` text NOT NULL,
  `newscontent` text NOT NULL,
  `class` varchar(20) NOT NULL,
  `addtime` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='新闻表';

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `class`, `addtime`) VALUES
(143, '这是一条推荐新闻', 'http://img4.imgtn.bdimg.com/it/u=2069772251,887234171&fm=206&gp=0.jpg', '守望先锋今天压力测试了。我买了预购，但是要上班.', '推荐', '2016-05-03'),
(144, '又是一条推荐新闻---暗黑3的第六赛季开始了！', 'http://img3.imgtn.bdimg.com/it/u=1089275167,1095134012&fm=21&gp=0.jpg', '暗黑3第六赛季开始了。我开了个DH，刷刷刷。', '推荐', '2016-05-03'),
(145, '第第三条推荐！ 炉石传说上古之神的低语上线啦！', 'http://img3.imgtn.bdimg.com/it/u=3802615994,2460699851&fm=21&gp=0.jpg', '嘿，小伙子们，看看谁来啦！古神的低语上线了', '推荐', '2016-05-03'),
(150, '魏则西事件', 'http://img5.imgtn.bdimg.com/it/u=3595239419,1923832894&fm=11&gp=0.jpg', '“百度不死，纠纷未已”。', '百家', '2016-05-03'),
(152, '魏则西事件', 'http://img5.imgtn.bdimg.com/it/u=3595239419,1923832894&fm=11&gp=0.jpg', '“百度不死，纠纷未已”。', '百家', '2016-05-03'),
(153, '魏则西事件', 'http://img5.imgtn.bdimg.com/it/u=3595239419,1923832894&fm=11&gp=0.jpg', '“百度不死，纠纷未已”。', '本地', '2016-05-03'),
(155, '魏则西事件', 'http://img5.imgtn.bdimg.com/it/u=3595239419,1923832894&fm=11&gp=0.jpg', '“百度不死，纠纷未已”。', '图片', '2016-05-03'),
(157, '魏则西事件', 'http://img5.imgtn.bdimg.com/it/u=3595239419,1923832894&fm=11&gp=0.jpg', '“百度不死，纠纷未已”。', '图片', '2016-05-03'),
(176, '安抚', 'http://s7.sinaimg.cn/large/001KnSfmgy6KCqYl6e2d6', '                 阿斯顿发           ', '推荐', '2016-05-05'),
(177, 'Dolby Atoms', 'http://pic2.52pk.com/files/160512/2166988_102749_1_lit.jpg', '                            好东西', '推荐', '2016-05-20'),
(178, '第第三条推荐！ 炉石传说上古之神的低语上线啦！', 'http://img3.imgtn.bdimg.com/it/u=3802615994,2460699851&fm=21&gp=0.jpg', '嘿，小伙子们，看看谁来啦！古神的低语上线了', '百家', '2016-05-03'),
(179, '这是一条推荐新闻', 'http://img4.imgtn.bdimg.com/it/u=2069772251,887234171&fm=206&gp=0.jpg', '守望先锋今天压力测试了。我买了预购，但是要上班.', '本地', '2016-05-03'),
(180, '又是一条推荐新闻---暗黑3的第六赛季开始了！', 'http://img3.imgtn.bdimg.com/it/u=1089275167,1095134012&fm=21&gp=0.jpg', '暗黑3第六赛季开始了。我开了个DH，刷刷刷。', '图片', '2016-05-03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsid`),
  ADD KEY `newstitle` (`newstitle`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=181;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
