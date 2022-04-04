  //  블럭 추가[타입 이름]
  Blockly.Blocks['string_length'] = {
    init: function() {
      // 입력 행 추가
      this.appendValueInput("TIMES")
      // 숫자인지 확인
          .setCheck("Number");
      // 행 추가
      this.appendDummyInput()
      // 글자 입력
          .appendField("%{BKY_TOOL_TIP_2}");
      // 해당하는 것 내용
      this.appendStatementInput("DO")
          .setCheck(null);
      // 입력값 수평 수직 정함(true시 수평)
      this.setInputsInline(true);
      // 이전에 입력을 받을수 있나
      this.setPreviousStatement(true, null);
      // 다음 입력이 가능한가
      this.setNextStatement(true, null);
      // 블럭 색상
      this.setColour(230);
  //  마우스 올렸을때 툴칩
   this.setTooltip("abc");
  //  마우스 오른쪽 클릭시 help 내용
   this.setHelpUrl("efg");
    }
  };