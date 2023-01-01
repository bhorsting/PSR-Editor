export function NumericKeybed (p) {
    return <>
        <div className="numericKeys">
            {['1','2','3','4','5','6','7','8','9','-','0','+'].map(value=>
                <button key={value} onClick={()=>{p.handleKeybed(value)}}>{value}</button>
            )}
        </div>
    </>;
}
