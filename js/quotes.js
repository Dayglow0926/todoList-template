const quotes = [
  {
    quote:
      "오늘날 대부분의 소프트웨어는 구조적 고민없이 그냥 벽돌 한장씩 쌓아올린 피라미드 같다. 더구나 수천 만의 노예와 폭력들로 쌓아 올려졌다.",
    author: "Alan Kay",
  },
  {
    quote:
      "나는 드디어 상위호환성 Upward Compatible이 의미하는 바를 깨달았다. 그것은 옛날에 만든 실수까지 그대로 유지해야 한다는 뜻이다. 제길.",
    author: "Alan Kay",
  },
  {
    quote:
      "이미 수백 만 개의 타자기 앞에 수백 만 원숭이들이 앉아있지만 유즈넷에는  세익스피어가 없다.",
    author: "Houghton",
  },
  {
    quote:
      "소프트웨어 설계를 하는 두 가지 방법이 있다. 하나는 빠진 게 없는지 쉽게 확인할 수 있도록 최대한 단순하게 만드는 것이고, 또 한가지는 빠진 게 없는지 확인할 수 없도록 최대한 복잡하게 만드는 것이다.",
    author: "C.A.R. Hoare, Quick Sort의 고안자",
  },
  {
    quote:
      "좋은 소프트웨어의 기능이란 복잡한 것을 간단하게 보이도록 만드는 것이다.",
    author: "Grady Booch, UML 개발자",
  },
  {
    quote:
      "책 보고 따라 해도 안된다고, 스스로 자책하지 마라. 진짜 멍청이들은 일반인들이 사용할 수 없도록 하드웨어와 소프트웨어를 만든 사람들이다. 사람들이 컴퓨터를 사주는데도 말이다. 우리는 그들을 컴퓨터 전문가라고 부른다.",
    author: "Walter Mossberg, 유명한 테크 저널리스트",
  },
  {
    quote:
      "소프트웨어 제작사들은 소프트웨어를 더욱 “사용자 친화적”으로 만들려고 노력한다. 하지만, 가장 잘한 일은 브로셔에 “사용자 친화적” 이라고 동그라미 친 것이다.",
    author: "Bill Gates, MS의 창립자",
  },
  {
    quote:
      "컴퓨터가 핸드폰과 비슷한 수준으로 쉬워지기를 바랐던 남자가 있었다. 그러자 전화기 사용법이 컴퓨터만큼 어려워지면서 그 소원이 자연스레 이루어지게 되었다.",
    author: "Bjarne Stroustrup, C++언어 발명가",
  },
  {
    quote: "고객을 ‘유저’라고 부르는 산업은 딱 두 개가 있다. – 마약, IT",
    author: "Edward Tufte, 데이터 시각화의 선구자",
  },
  {
    quote:
      "어떤 바보라도 컴퓨터를 사용할 수 있다. 그래서 많은 사람들이 컴퓨터를 사용한다.",
    author: "Ted Nelson, HTML을 만든 사회 과학자",
  },
  {
    quote:
      "프로그래머들은 더 많은 멍청이를 만들지  않기 위해 “the Universe”(우주과학 다큐멘터리)와 경쟁하고 있지만, the Universe는 더 많은 멍청이를 만들기 위해 애쓰고 있다. 그런데 아직까지는 the Universe 가 이기고 있다.",
    author: "Rich Cook, 판타지 소설가",
  },
  {
    quote:
      "우리는 프로그래머 3대 미덕을 잘 알고 있다. 게으름, 괴팍함, 그리고 자만심.",
    author: "Larry Wall, Perl 언어의 창시자",
  },
];

const quote = document.querySelector(".footer-content__quote-text");
const author = document.querySelector(".footer-content__quote-author");

const quote_num = Math.floor(Math.random() * quotes.length);
const quote_context = quotes[quote_num];

quote.innerHTML = quote_context.quote;
author.innerHTML = quote_context.author;
