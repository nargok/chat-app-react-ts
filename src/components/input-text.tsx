import React from "react";
import styled from "styled-components";

interface InputTextProps {
  onInput: (e: React.FormEvent<HTMLDivElement>) => void;
  onBlur: (e: React.FormEvent<HTMLDivElement>) => void;
  placeholder: string;
}

class InptuText extends React.Component<InputTextProps> {
  render() {
    return (
      <InputTextStyle>
        <div
          contentEditable={true}
          onInput={this.props.onInput}
          onBlur={this.props.onBlur}
          className="text"
          dat-placeholder={this.props.placeholder}
        ></div>
      </InputTextStyle>
    );
  }
}

const InputTextStyle = styled.div`
  .text {
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    padding: 10px;

    &:focus {
      border: 1px solid #d3d3d3;
    }
  }

  [data-placeholder]:empty:before {
    content: attr(data-placeholder);
    color: #888;
  }
`;

export default InptuText;
