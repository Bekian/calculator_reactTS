import Button from "./Button";

type ButtonPanelProps = {
    onButtonClick: (value: string) => void;
};

const ButtonPanel: React.FC<ButtonPanelProps> = ({ onButtonClick }) => {
    return (
        <div className="card">
            <Button value='%' onClick={onButtonClick} />
            <Button value='CE' onClick={onButtonClick} />
            <Button value='C' onClick={onButtonClick} />
            <Button value='&laquo;' onClick={onButtonClick} />
            <br />
            <Button value='1/&#x1D465;' onClick={onButtonClick} />
            <Button value='&#x1D465;^2' onClick={onButtonClick} /> 
            <Button value='&#8730;&#x1D465;' onClick={onButtonClick} />
            <Button value='/' onClick={onButtonClick} />
            <br />
            <Button value="7" onClick={onButtonClick} />
            <Button value="8" onClick={onButtonClick} />
            <Button value="9" onClick={onButtonClick} />
            <Button value="*" onClick={onButtonClick} />
            <br />
            <Button value="4" onClick={onButtonClick} />
            <Button value="5" onClick={onButtonClick} />
            <Button value="6" onClick={onButtonClick} />
            <Button value="-" onClick={onButtonClick} />
            <br />
            <Button value="1" onClick={onButtonClick} />
            <Button value="2" onClick={onButtonClick} />
            <Button value="3" onClick={onButtonClick} />
            <Button value="+" onClick={onButtonClick} />
            <br />
            <Button value='+/-' onClick={onButtonClick} />
            <Button value='0' onClick={onButtonClick} />
            <Button value='.' onClick={onButtonClick} />
            <Button value='=' onClick={onButtonClick} />
        </div>
    );
};

export default ButtonPanel;