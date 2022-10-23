<script>

export default {
  name: 'TheItem',
  props: {
    card: { type: Object, default: { row: 0, text: "Null card" } }
  }
}

</script>

<template>
    <div class="list-cards">
      <!-- <p>{{card.text}}</p> -->
      <a class="list-card" href="#" draggable="true">
        <div class="list-card-cover"></div><span class="icon-sm icon-edit list-card-operation dark-hover"></span>
        <div class="list-card-stickers-area hide">
          <div class="stickers"></div>
        </div>
        <div class="list-card-details">
          <div class="list-card-front-labels-container">
          </div><span class="list-card-title"><span class="card-short-id hide"></span></span>
          <div class="badges"><span></span><span class="custom-field-front-badges">
              <span></span>
            </span><span class=""><span></span></span></div>
          <div class="list-card-members"></div>
        </div> 
        {{card.text}}
      </a>
    </div>

</template>
