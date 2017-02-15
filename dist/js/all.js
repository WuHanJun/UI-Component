/**
 * Created by lenovo on 2017/2/15.
 */

import $ from 'jquery';
import videojs from 'videoJs';
function setTime() {
    var timeEle = $('.time'),
        dateEle = $('.date');
    var time = setInterval(function () {
        var now = new Date(),
            hour = now.getHours(),
            min = now.getMinutes(),
            sec = now.getSeconds(),
            hourTemp, minTemp, secTemp;
        hour < 10 ? hourTemp = '0' + hour : hourTemp = hour;
        min < 10 ? minTemp = '0' + min : minTemp = min;
        sec < 10 ? secTemp = '0' + sec : secTemp = sec;
        timeEle.html(hourTemp + ':' + minTemp + ':' + secTemp);
    }, 1000);

    function getDate() {
        var date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth(),
            today = date.getDate(),
            monthTemp, todayTemp;
        today < 10 ? todayTemp = '0' + today : todayTemp = today;
        var monthArr = new Array("January ", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        dateEle.html(monthArr[month] + ' ' + todayTemp + ', ' + year);
    }

    getDate();
    var time2 = setInterval(getDate, 86400000);



    var myPlayer = videojs('example_video_1');

    videojs("example_video_1").ready(function(){
        window.VIDEOJS_NO_BASE_THEME = false;
        var myPlayer = this;

        // EXAMPLE: Start playing the video.
        // myPlayer.play();

    });
}
export default setTime()
