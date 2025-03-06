# Тестовое задание Simbirsoft (React)

# Страница, для отображения списка схем перевода в виде таблицы:

**Данные о схемах сохраняются в localStorage. При первом открытии страницы отображается кнопка
"добавить" а так же таблица с шапкой и строкой “Нет ни одной схемы, добавить” (дублирует поведение
основной кнопки).**

**При нажатии кнопки “Добавить” появляется диалог:**

**Пользователь заполняет все поля (все они обязательные) и после успешного сохранения в таблице
появляется новая строка с новыми данными. Если не все поля заполнены, то сохранить такую форму
нельзя, ошибки валидации появляются только после нажатия кнопки “Добавить” внутри диалога. “Отмена”
приводит к закрытию диалогу и утрате всех введенных данных. Стоит обратить отдельное внимание, что
язык оригинала не равен ни одному языку перевода, иначе - отображается ошибка валидации.**

**Любую схему можно отредактировать, для этого при наведении на строку в таблице появляется
специальный значок-карандаш в ячейке “Название”:**

**По нажатию появляется аналогичной диалог как и при создании (только текст заголовка и кнопки
“Добавить” заменен на “Редактировать”) с заполненными данными.**

##
