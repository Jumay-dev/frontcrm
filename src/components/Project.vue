<template>
  <v-card
    elevation="2"
    style="margin: 10px;"
  >
    <div style="padding: 10px; background: blue; color: white">Проект № 2236 зарегистрирован 08-04-2019 (14:08)</div>
    <div 
    class="d-flex flex-row"
    style="padding: 10px; justify-content: space-between"
    >
      <div class="d-flex flex-column">
        <div>Дилер: ООО "ААА"</div>
        <div>Менеджер: Иванов Иван Иванович</div>
        <div>Конечный клиент</div>
        <div>Наименование: ООО "ЭЭЭ"</div>
        <div>ИНН: 123456789</div>
        <div>Адрес(а): ул. Пушкина, дом Колотушкина</div>
        <div>Комментарий</div>
      </div>
      <div class="d-flex flex-column">
        <template>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Оборудование
                  </th>
                  <th class="text-left">
                    Статус
                  </th>
                  <th class="text-left">
                    <v-checkbox></v-checkbox>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ЛОР-комбайн</td>
                  <td>Авторизация прекращена</td>
                  <td><v-checkbox></v-checkbox></td>
                </tr>
                <tr>
                  <td>ЛОР-комбайн</td>
                  <td>Авторизация прекращена</td>
                  <td><v-checkbox></v-checkbox></td>
                </tr>
                <tr>
                  <td>ЛОР-комбайн</td>
                  <td>Авторизация прекращена</td>
                  <td><v-checkbox></v-checkbox></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </template>
        <v-btn>Изменить</v-btn>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>