<script>
import { ComentsService } from "@/services/coments-service";

export default {
  data() {
    return {
      value:"",
      commets: [],
      body: "",
      postId: "",
      commentId: "",
      categories: [
        {name: "Lacteos", code: "LA"},
        {name: "Verduras", code: "VE"},
        {name: "Frutas", code: "FR"},
      ],
    };
  },
  //ciclo de vida en un componentes(funciones)
  created() {
    new ComentsService().getComments()
      .then(response =>{
        console.log("invocado API")
        console.log(response.status)
        console.log(response.data)
        this.commets = response.data;
    })
  },
  methods:{
    createComment: function(){
      new ComentsService().postComment(this.body, this.postId)
        .then(response=>{
          console.log("postComment",response)
      })
    },
    deleteComment : function(){
      new ComentsService().deleteComment(this.commentId)
        .then(response=>{
          console.log("postComment",response)
        })
        .catch(error =>{
          console.log("postComment",error)
        })
    },
    putComment: function(){
      new ComentsService().putComment(this.commentId, this.body, this.postId)
        .then(response=>{
          console.log("putComment",response)
        })
    },
  }
};

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

      <div class="field grid">
        <label for="category" class="col-fixed" style="width:150px">Comentarios</label>
        <div class="col">
          <pv-dropdown
            id = "commet"
            :options="commets"
            optionaLabel="body"
            placeholder="Select a commet"
            class="w-full"
          ></pv-dropdown>

        </div>
      </div>

      <div class="field grid">
        <label for="body" class="col-fixed" style="width:150px" >Cuerpo</label>
        <div class="col">
          <InputText id="body" v-model="body"/>
        </div>
      </div>

      <div class="field grid">
        <label for="postId" class="col-fixed" style="width:150px" >PostId</label>
        <div class="col">
          <InputText id="postId" v-model="postId"/>
        </div>
      </div>

      <div class="field grid">
        <label for="commentId" class="col-fixed" style="width:150px" >Id a Eliminar</label>
        <div class="col">
          <InputText id="commentId" v-model="commentId"/>
        </div>
      </div>

      <Button @click="createComment">Crear Post</Button>

      <Button @click="deleteComment">Eliminar Post</Button>

      <Button @click="putComment">Modificar Post</Button>

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

<style scoped></style>
