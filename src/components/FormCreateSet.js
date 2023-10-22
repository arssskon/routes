export function FormCreateSet() {
    return (
        <form>
            <label>
                <input type="text" name="name" /> //нэйм👀
            </label>
            <label>
                Описание:
                    <textarea name="discription"/>
            </label>
            <input tupe="submit" value="Создать сет" />
        </form> 
    );
}