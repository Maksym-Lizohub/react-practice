const TransactionForm = () => {
  return (
    <form>
      <label>
        День
        <input type="date" name="date" />
      </label>
      <label>
        Час
        <input type="time" name="time" />
      </label>
      <label>
        Категорія
        <input type="button" name="category" value="продукти" />
      </label>
      <label>
        Сума
        <input type="text" name="summ" placeholder="Введіть суму" />
      </label>
      <label>
        Валюта
        <input type="button" name="currency" value="UAH" />
      </label>
      <label>
        <input type="text" name="comment" placeholder="Коментар" />
      </label>
    </form>
  );
};
export default TransactionForm;
