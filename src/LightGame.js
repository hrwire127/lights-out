import React, { Component } from 'react'
import './LightGame.css'
import Block from './Block'

class LightGame extends Component
{
    constructor(props)
    {
        super(props);
        let blocks = []
        for (let i = 1; i <= 25; i++)
        {
            blocks.push(`${i}a`);
        }
        this.state = {
            blocks: blocks
        }
        this.changeColor = this.changeColor.bind(this);
        this.checkGrid = this.checkGrid.bind(this);
    }
    checkGrid(index, i)
    {
        let ends = [4, 9, 14, 19, 24, 0, 5, 10, 15, 20]
        if (ends.includes(index - i) && ends.includes(index))
        {
            console.log(false)
            return false;

        }
        else
        {
            console.log(true)
            return true;
        }


    }
    changeColor(index)
    {
        let arr = [...this.state.blocks]
        arr.splice(index, 1, `${index + 1}${arr[index].includes("a") ? "b" : "a"}`);
        if (arr[index + 5]) { arr.splice(index + 5, 1, `${index + 1 + 5}${arr[index + 5].includes("a") ? "b" : "a"}`) }
        if (arr[index - 5]) { arr.splice(index - 5, 1, `${index + 1 - 5}${arr[index - 5].includes("a") ? "b" : "a"}`) }
        if (arr[index - 1] && this.checkGrid(index, 1)) { arr.splice(index - 1, 1, `${index + 1 - 1}${arr[index - 1].includes("a") ? "b" : "a"}`) }
        if (arr[index + 1] && this.checkGrid(index, -1)) { arr.splice(index + 1, 1, `${index + 1 + 1}${arr[index + 1].includes("a") ? "b" : "a"}`) }
        this.setState({ blocks: arr })
    }

    render()
    {
        const blocks = this.state.blocks;
        console.log(blocks);
        return (
            <div className='container'>
                <div className='title'>
                    <h1 style={{ display: "inline" }} className='neon'>Lights</h1>
                    <h1 style={{ display: "inline" }} className='flux'>Out</h1>
                </div>
                <div className='grid'>
                    {blocks.map(b =>
                    {
                        return < div onClick={this.changeColor.bind(this, blocks.indexOf(b))} key={b} > <Block color={b.includes("a") ? "a" : "b"} /></div>
                    })}
                </div>
            </div >
        )
    }
}
export default LightGame;