import PortasoundSlider from './PortasoundSlider';
import React from 'react';
import PortasoundButton from './PortasoundButton';
import {NumericKeybed} from "./NumericKeybed";

const NUM_OPERATOR_PARAMS = 17;
const FIRST_OPERATOR_PARAM_IDX = 14;

const MODES = ['Settings', 'Global', 'LFO', 'Operator 1', 'Operator 2', 'Operator 3', 'Operator 4'];


function opToParamIdxFn(op) {
    const opIdx = {1: 3, 2: 1, 3: 2, 4: 0}[op];
    return paramIdx => {
        return paramIdx + opIdx * NUM_OPERATOR_PARAMS + FIRST_OPERATOR_PARAM_IDX;
    }
}

export function DSR2000(p) {
    return <>
        {NumericKeybed(p)}
        <div>
            {MODES.map(((mode, index) =>
                    <div className="mode-subgroup" key={mode}>
                        <div className="button-column">
                            <div className="button-container">
                                <label className="label">
                                    <span className={`button-lamp ${p.mode === index ? 'on' : 'off'}`}/>
                                    {mode}
                                </label>
                                {index === 0 ?
                                    <button className='yellow' onDoubleClick={() => {
                                        p.setMode(index)
                                    }} onTouchEnd={
                                        () => {
                                            p.setMode(index)
                                        }
                                    }/>:
                                    <button className='cyan' onClick={() => {
                                        p.setMode(index)
                                    }}/>
                                }
                            </div>
                        </div>
                    </div>
            ))}


        </div>
        {(() => {
            console.log(p.mode)
            switch (p.mode) {
                case 1:
                    return <div className="param-group">
                        <h2 className="param-group-label label">Global</h2>
                        <div className="param-subgroup">
                            <PortasoundSlider {...p.params[0]} value={p.values[0]}
                                              handleParamChange={p.handleParamChange}/>

                            <div className="inline">
                                <table className="algorithms">
                                    <tbody>
                                    <tr>
                                        <td><img className={p.values[0] === 0 ? 'selected' : ''} src="images/alg1.svg" onClick={(e) => p.handleParamChange(0, 0)}/></td>
                                        <td><img className={p.values[0] === 1 ? 'selected' : ''} src="images/alg2.svg" onClick={(e) => p.handleParamChange(0, 1)}/></td>
                                        <td><img className={p.values[0] === 2 ? 'selected' : ''} src="images/alg3.svg" onClick={(e) => p.handleParamChange(0, 2)}/></td>
                                        <td><img className={p.values[0] === 3 ? 'selected' : ''} src="images/alg4.svg" onClick={(e) => p.handleParamChange(0, 3)}/></td>
                                    </tr>
                                    <tr>
                                        <td><img className={p.values[0] === 4 ? 'selected' : ''} src="images/alg5.svg" onClick={(e) => p.handleParamChange(0, 4)}/></td>
                                        <td><img className={p.values[0] === 5 ? 'selected' : ''} src="images/alg6.svg" onClick={(e) => p.handleParamChange(0, 5)}/></td>
                                        <td><img className={p.values[0] === 6 ? 'selected' : ''} src="images/alg7.svg" onClick={(e) => p.handleParamChange(0, 6)}/></td>
                                        <td><img className={p.values[0] === 7 ? 'selected' : ''} src="images/alg8.svg" onClick={(e) => p.handleParamChange(0, 7)}/></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            {[1, 2].map(idx =>
                                <PortasoundSlider key={idx} {...p.params[idx]} value={p.values[idx]}
                                                  handleParamChange={p.handleParamChange}/>
                            )}
                            <div className="button-column">
                                {[3, 4].map(idx =>
                                    <PortasoundButton key={idx} {...p.params[idx]} value={p.values[idx]}
                                                      handleParamChange={p.handleParamChange}/>
                                )}
                            </div>
                        </div>
                        <br/>
                        <div className="param-subgroup">
                            <div className="button-column">
                                <div className="button-container">
                                    <label htmlFor="demo" className="label">
                                        Demonstration Start/Stop
                                    </label>
                                    <button id="demo" className="yellow" onClick={p.toggleDemo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    break;
                case 2:
                    return <div className="param-group">
                        <h2 className="param-group-label label">LFO</h2>
                        <div className="param-subgroup">
                            <h3 className="label">Low Freq Oscillator</h3>
                            {[6, 7, 8, 9, 10, 11, 12, 13].map(idx =>
                                <PortasoundSlider key={idx} {...p.params[idx]} value={p.values[idx]}
                                                  handleParamChange={p.handleParamChange}/>
                            )}
                        </div>
                    </div>
                    break;
                case 3:
                case 4:
                case 5:
                case 6:
                    return [p.mode-2].map(op =>
                        <div key={`op${op}`} className="param-group">
                            <h2 className="param-group-label label">Operator {op}</h2>
                            <div className="param-subgroup">
                                <h3 className="label">Oscillator</h3>
                                {[0, 1, 2, 3, 4].map(opToParamIdxFn(op)).map(idx =>
                                    <PortasoundSlider key={idx} {...p.params[idx]} value={p.values[idx]}
                                                      handleParamChange={p.handleParamChange}/>
                                )}
                                <div className="button-column">
                                    {[5, 7].map(opToParamIdxFn(op)).map(idx =>
                                        <PortasoundButton key={idx} {...p.params[idx]} value={p.values[idx]}
                                                          handleParamChange={p.handleParamChange}/>
                                    )}
                                </div>
                            </div>
                            <div className="param-subgroup">
                                <h3 className="label">Envelope</h3>
                                {[8, 9, 10, 11, 12].map(opToParamIdxFn(op)).map(idx =>
                                    <PortasoundSlider key={idx} {...p.params[idx]} value={p.values[idx]}
                                                      handleParamChange={p.handleParamChange}/>
                                )}
                            </div>
                            <br/><br/>
                            <div className="param-subgroup">
                                <h3 className="label">Key Scaling</h3>
                                {[13, 14, 15, 16].map(opToParamIdxFn(op)).map(idx =>
                                    <PortasoundSlider key={idx} {...p.params[idx]} value={p.values[idx]}
                                                      handleParamChange={p.handleParamChange}/>
                                )}
                            </div>
                        </div>
                    )
            }
        })()}
    </>;
}
