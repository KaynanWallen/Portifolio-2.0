import React from 'react'

import { DataHome, HomeDataItem } from '../../data/database';

import {StyledParagraph} from './StyledLayout'
type Props = {
    Array: HomeDataItem[][];
};

const LayoutContent = ({Array}: Props) => {
  return (
    <>
        {Array.map((arr: HomeDataItem[], index) => (
            <>
            {arr.map((item: HomeDataItem) => (
                <div>
                    <span> {index + 1} </span>
                    <StyledParagraph space = {item.espaçamento}> {item.content === "link" ? (
                        <>
                        <span>{item.before_content}</span>

                            <StyledParagraph color='gray' link = {true}>{item.link_content}</StyledParagraph>

                        <span>{item.after_content}</span>
                        </>
                    ) : item.content} </StyledParagraph>
                </div>
            ))}
            </>
        ))}
    </>
  )
}

export default LayoutContent