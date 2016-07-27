-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-05-12 17:45:40
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ob_db`
--

-- --------------------------------------------------------

--
-- 表的结构 `ob_news`
--

CREATE TABLE `ob_news` (
  `id` int(11) NOT NULL,
  `typeID` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img` varchar(300) NOT NULL,
  `url` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `ob_news`
--

INSERT INTO `ob_news` (`id`, `typeID`, `title`, `img`, `url`) VALUES
(1, 1, '菲律宾新总统:希望冲浪去中国南沙新机场插国旗', 'http://t11.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/common/2016/05/12/146301464338000421_720_1000.JPEG&fm=36', '1'),
(63, 2, '菲律宾新总统:希望冲浪去中国南沙新机场插国旗', 'http://t12.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/bindTVPic/2016/05/12/146301975085776746_720_1000.JPEG&fm=36', '2'),
(64, 1, '白衣天使们变换职业装和休闲装，展现青春活力，弘扬新时代的南丁格尔精神。', 'http://t10.baidu.com/it/u=http://img3.cache.netease.com/photo/0001/2016-05-12/BMSEMR0100AP0001.jpg&fm=94', '2'),
(65, 1, '美女护士"变装秀"展青春活力', 'http://t10.baidu.com/it/u=http://img3.cache.netease.com/photo/0001/2016-05-12/BMSEMR0100AP0001.jpg&fm=94', '2'),
(66, 0, '', '', '');

-- --------------------------------------------------------

--
-- 表的结构 `ob_types`
--

CREATE TABLE `ob_types` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `ob_types`
--

INSERT INTO `ob_types` (`id`, `name`) VALUES
(1, '推荐'),
(2, '百家'),
(3, '本地'),
(4, '互联网'),
(5, '娱乐'),
(6, '社会'),
(7, '科技'),
(8, '女人'),
(9, '金融'),
(40, '测试');

-- --------------------------------------------------------

--
-- 表的结构 `ob_user`
--

CREATE TABLE `ob_user` (
  `userid` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `ob_user`
--

INSERT INTO `ob_user` (`userid`, `username`, `password`) VALUES
(1, 'admin@163.com', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ob_news`
--
ALTER TABLE `ob_news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ob_types`
--
ALTER TABLE `ob_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ob_user`
--
ALTER TABLE `ob_user`
  ADD PRIMARY KEY (`userid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `ob_news`
--
ALTER TABLE `ob_news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
--
-- 使用表AUTO_INCREMENT `ob_types`
--
ALTER TABLE `ob_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
--
-- 使用表AUTO_INCREMENT `ob_user`
--
ALTER TABLE `ob_user`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
