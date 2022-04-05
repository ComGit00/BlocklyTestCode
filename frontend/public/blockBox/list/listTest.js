var toolbox1 = {
  "kind": "flyoutToolbox",
  "contents": [
    {
      //  블록 생성
      "kind": "block",
      //  controls_if으로 맵핑된 블럭 생성
      "type": "controls_if"
    },
    {
      //  블록 생성
      "kind": "block",
      //  test 맵핑된 블럭 생성
      "type": "string_length"
    },
  ]
}

var toolbox2 = {
  //  케테고리 형식
  "kind": "categoryToolbox",
  //  컨텐츠 이름
  "contents": [
    {
      //  카테고리1
      "kind": "category",
      //  카테고리 이름
      "name": "Control",
      //  카테고리에 옆쪽 생성 바 색상
      "colour": "20",
      //  카테고리 내용
      "contents": [
        {
          //  블록 생성
          "kind": "block",
          //  controls_if으로 맵핑된 블럭 생성
          "type": "controls_if"
        },
      ]
    },
  ]
}

var toolbox3 = {
  //  케테고리 형식
  "kind": "categoryToolbox",
  //  컨텐츠 이름
  "contents": [
    {
      //  카테고리 1
      "kind": "category",
      //  카테고리 이름
      "name": "test",
      //  카테고리에 옆쪽 생성 바 색상
      "colour": "20",
      //  카테고리 컨텐츠
      "contents": [
          {
          //  카테고리1-1
          "kind": "category",
          //  카테고리 이름
          "name": "Control",
          //  카테고리 내용
          "contents": [
            {
              //  블록 생성
              "kind": "block",
              //  controls_if으로 맵핑된 블럭 생성
              "type": "controls_if"
            },
          ]
        },
      ]
    }
  ]
}
