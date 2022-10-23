//출처 : https://jdh5202.tistory.com/450
// 빈 값 체크
var isEmpty = function (value) {
  if (
    value == "" ||
    value == null ||
    value == undefined ||
    (value != null && typeof value == "object" && !Object.keys(value).length)
  ) {
    return true;
  } else {
    return false;
  }
};

// 유튜브 비디오 id 추출

function youtube_parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;

  var match = url.match(regExp);

  return match && match[7].length == 11 ? match[7] : false;
}

// playlist - index = 현재 재생위치

var videoIds = [];

var index = 0;

var option;

var onLoad;

var yPlayer;

function loadYouTubeApi() {
  var tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";

  var firstScriptTag = document.getElementsByTagName("script")[0];

  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  if (option == "Sequen") videoID = videoIds[0];
  else videoID = videoIds[Math.floor(Math.random() * videoIds.length)];
}

function onYouTubeIframeAPIReady() {
  yPlayer = new YT.Player("player", {
    height: "190",

    width: "220",

    videoId: videoID,

    playerVars: { disablekb: 1, controls: 0, rel: 0 },

    events: {
      onReady: onPlayerReady,

      onStateChange: onPlayerStateChange,

      onError: onPlayerError,
    },
  });
}

function onPlayerError(event) {
  if (event.data == 150) {
    yPlayer.stopVideo();
    onPlayerStateChange_excute();
  }
}

function onPlayerReady(event) {
  yPlayer.setPlaybackRate(1);

  event.target.setVolume(70);

  yPlayer.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    setTimeout(onPlayerStateChange_excute, onLoad);
  }
}

function onPlayerStateChange_excute() {
  index++;

  if (option == "Sequen") {
    if (isEmpty(videoIds[index]) == true) index = 0;

    videoID = videoIds[index];
  } else {
    videoID = videoIds[Math.floor(Math.random() * videoIds.length)];
  }

  yPlayer.loadVideoById(videoID);
}

// 리스트 생성

$("td#btn-add-row").click(function () {
  // id 구하기

  var list_num = 1;

  for (var i = 1; i <= 100; i++) {
    if ($("#basic tr td:nth-child(1)").hasClass(String(i)) == false) {
      list_num = i;
      break;
    }
  }

  // 추가

  $("#basic > tbody:last").append(
    '<tr><td style="cursor:pointer" title="더블클릭 시 삭제됩니다." class="' +
      list_num +
      '"></td><td>음악 ' +
      list_num +
      '</td><td><input type="text" name="tb"></td><td><input type="text"></td></tr>'
  );

  // 동적 테이블
  $("#basic").tableDnD();
});

// 리스트 삭제

$("#basic").on("dblclick", "tr td:nth-child(1)", function () {
  $(this).closest("tr").remove();
});

// 리스트 모두 삭제

$(function () {
  $("#btn-empty").click(function () {
    $("#basic > tbody").empty();

    $("#btn-add-row").trigger("click");
    $("#btn-add-row").trigger("click");

    index = 0;

    videoIds = [];

    option = "";
  });

  // 목록 초기화
  $("#btn-empty").trigger("click");
});

function execute_func() {
  // 정상적인 url만 필터하기

  var tmp_url = ["https://www.youtube.com/watch?v=RbysxH3gt-Q"];

  videoIds = [];

  $("[name^='tb']").each(function () {
    tmp_url.push($(this).val());
  });

  for (var i = 0; i < tmp_url.length; i++) {
    if (isEmpty(tmp_url[i]) == false) {
      var str_tmp = youtube_parser(tmp_url[i]);

      if (str_tmp != false) videoIds.push(str_tmp);
    }
  }

  if (isEmpty(videoIds) == false) {
    if (isEmpty(yPlayer) == false) {
      yPlayer.stopVideo();

      yPlayer.destroy();

      yPlayer = null;

      index = 0;

      onYouTubeIframeAPIReady();
    }

    loadYouTubeApi();
  }
}

document
  .querySelector(".music-header__play-button .fa-play")
  .addEventListener("click", function () {
    option = "Sequen";
    execute_func();
    toggleElement();
  });

document
  .querySelector(".music-header__play-button .fa-pause")
  .addEventListener("click", function () {
    option = "Sequen";
    if (isEmpty(yPlayer) == false) {
      yPlayer.stopVideo();
      toggleElement();
    }
  });

function toggleElement() {
  document
    .querySelector(".music-header__play-button .fa-play")
    .classList.toggle("hide");
  document
    .querySelector(".music-header__play-button .fa-pause")
    .classList.toggle("hide");
  document.querySelector(".animation-view__rhythm").classList.toggle("play");
}

$("#Ran_Execute").click(function () {
  option = "Random";

  execute_func();
});

$("#vol_up").click(function () {
  if (isEmpty(yPlayer) == false) {
    var cur_vol = yPlayer.getVolume();

    if (cur_vol < 100) yPlayer.setVolume(cur_vol + 10);
  }
});

$("#vol_down").click(function () {
  if (isEmpty(yPlayer) == false) {
    var cur_vol = yPlayer.getVolume();

    if (cur_vol > 0) yPlayer.setVolume(cur_vol - 10);
  }
});

$("#Next_ms").click(function () {
  if (isEmpty(yPlayer) == false) {
    yPlayer.seekTo(yPlayer.getDuration());
  }
});

$("#Previous_ms").click(function () {
  if (isEmpty(yPlayer) == false) {
    if (option == "Sequen") {
      if (index > 0) {
        yPlayer.stopVideo();

        yPlayer.destroy();

        yPlayer = null;

        index--;

        videoID = videoIds[index];

        onYouTubeIframeAPIReady();

        loadYouTubeApi();
      } else {
        alert("이전 곡이 없습니다.");
      }
    } else {
      alert("무작위 재생은 해당 기능을 지원하지 않습니다.");
    }
  }
});

$("#after_play").change(function () {
  onLoad = $(this).val();
});
