export function FormCreateCard() {
    return (
        <form>
            <label>
                Передняя сторона карточки:
                <input type="text" name="fronttext" />
            </label>
            <label>
                 задняя сторона карточки:
                 <input type="text" name="backtext" />
            </label>
            <input type="submit" value="Создать карточку" />
        </form>
    )
}