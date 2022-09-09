<script>
export default {
  data() {
    return {
      categories: [
        {name: 'Lacteos', code: 'LA'},
        {name: 'Verduras', code: 'VE'},
        {name: 'Frutas', code: 'FR'},
      ]
    }
  }
}
</script>

<template>
  <form>

    <div class="card">
      <h1>
        {{ $t("greeting", {name:"Diego"}) }}
      </h1>
      <div class="field grid">
          <label for="code" class="col-fixed" style="width:150px">{{ $t("code") }}</label>
        <div class="col">
          <InputNumber id="code"/>
            <Button label="validar"></Button>
        </div>
      </div>

      <div class="field grid">
          <label for="nombre" class="col-fixed" style="width:150px">Nombre</label>
        <div class="col">
          <InputText id="nombre"/>
        </div>
      </div>

      <div class="field grid">
          <label for="abreviatura" class="col-fixed" style="width:150px">Abreviatura</label>
        <div class="col">
          <InputText id="abreviatura"/>
        </div>
      </div>

      <div class="field grid">
          <label for="category" class="col-fixed" style="width:150px">Categoria</label>
        <div class="col">
          <pv-dropdown
            id = "category"
            :options="categories"
            optionaLabel="code"
            placeholder="Select a category"
            class="w-full"
          ></pv-dropdown>
        </div>
      </div>

      <h2>
        {{ $tc("product",1)}}
      </h2>

      <div class="field grid">
          <label for="RUC" class="col-fixed" style="width:150px">RUC Proveedor</label>
        <div class="col">
          <InputNumber ruc="ruc_proveedor"/>
        </div>
      </div>

      <div class="field grid">
          <label for="Price" class="col-fixed" style="width:150px">Precio</label>
        <div class="col">
           <select id="Price" class="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary">
              <option></option>
              <option>S/.1000</option>
              <option>S/.2000</option>
              <option>S/.3000</option>
              <option>S/.4000</option>
              <option>S/.5000</option>
           </select>
        </div>
      </div>

      <div class="field grid">
        <label for="color fill" class="col-fixed" style="width:150px">Color de etiqueta</label>
        <div class="col">
          <Button></Button>
        </div>
      </div>

      <div class="field grid">
          <label for="date" class="col-fixed" style="width:150px">Fecha</label>
        <div class=7> <InputMask id="date" v-model="value" mask="99-99-99" class="w-full"/></div>
      </div>

      <div class="field grid">
          <label for="Estado" class="col-fixed" style="width:150px">Estado</label>
         <div class="formgroup-inline">
            <div class="field-radiobutton">
              <input type="radio" name="hcondition" id="condition1">
              <label for="condition1">Activo</label>
            </div>
            <div class="field-radiobutton">
              <input type="radio" name="hcondition" id="condition2">
              <label for="condition2">Suspendido</label>
            </div>
            <div class="field-radiobutton">
              <input type="radio" name="hcondition" id="condition3">
              <label for="condition3">De Baja</label>
            </div>
         </div>
      </div>

      <div class="field grid">
        <label for="Afecto a impuesto" class="col-fixed" style="width:150px">Afecto a impuesto</label>
        <div class="col">
          <input type="checkbox" id="impuesto">
        </div>
      </div>

      <div class="field grid">
        <label for="address" class="col-fixed" style="width:150px">Descripcion</label>
        <textarea id="address" type="text" rows="4" style="width:250px"></textarea>
      </div>
    </div>

  </form>
</template>

<style scoped>

</style>
