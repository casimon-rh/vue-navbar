<template lang="pug">
  v-card.mx-auto(width="500")
    v-toolbar(color="teal", dark)
      v-app-bar-nav-icon
      v-toolbar-title Tesoreria
    v-list
      template(v-for="elem in list")
        template(v-if="elem.expandable")
          ElementoExpandible(
            v-bind:navelement="elem.navelement",
            v-bind:sub="elem.sub"
          )
        template(v-else)
          ElementoLista(
            v-bind:navelement="elem.navelement",
          )
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ElementoLista from './ElementoLista.vue'
import ElementoExpandible from './ElementoExpandible.vue'
@Component({
  components: {
    ElementoLista, ElementoExpandible
  }
})
export default class Lista extends Vue {
  private data () {
    return {
      list: [
        {
          navelement: {
            label: 'Transacciones',
            url: '/app/tesoreria/transacciones'
          }
        },
        {
          navelement: {
            label: 'Borradores',
            url: '/app/tesoreria/borradores'
          }
        },
        {
          navelement: {
            label: 'Nueva Operación'
          },
          expandable: true,
          sub: [
            {
              label: 'Aportaciones de capital',
              url: '/app/tesoreria/form-aport-cap'
            },
            {
              label: 'Apertura o incremento de un fondo de caja chica',
              url: '/app/tesoreria/form-c-ch'
            },
            {
              label: 'Disminuciones de capital',
              url: '/app/tesoreria/form-dismin-cap'
            },
            {
              label: 'Disposición de financiamiento',
              url: '/app/tesoreria/form-disp-finan'
            },
            {
              label: 'Cobro de factura de cliente, sin pedido contractual',
              url: '/app/tesoreria/form-factura'
            },
            {
              label: 'Pago de comisiones e intereses',
              url: '/app/tesoreria/form-gto-fin'
            },
            {
              label: 'Gastos por comprobar por viaje o de otra naturaleza',
              url: '/app/tesoreria/form-gxc'
            },
            {
              label: 'Orden de pago',
              url: '/app/tesoreria/form-op'
            },
            {
              label: 'Pago de Nomina',
              url: '/app/tesoreria/form-nomin'
            },
            {
              label: 'Pago de orden de compra',
              url: '/app/tesoreria/form-oc'
            },
            {
              label: 'Pago en devolución total o parcial de financiamiento',
              url: '/app/tesoreria/form-pago-finan'
            },
            {
              label: 'Pago de préstamos otorgados',
              url: '/app/tesoreria/form-pago-ptmo'
            },
            {
              label: 'Cobro de factura de cliente originada por un pedido contractual',
              url: '/app/tesoreria/form-pedido'
            },
            {
              label: 'Pago de impuestos',
              url: '/app/tesoreria/form-imptos'
            },
            {
              label: 'Intereses cobrados',
              url: '/app/tesoreria/form-intr-cobr'
            },
            {
              label: 'Intereses pagados',
              url: '/app/tesoreria/form-intr-pagd'
            },
            {
              label: 'Orden de pago Wall',
              url: '/app/tesoreria/form-op-wall'
            },
            {
              label: 'Pago de orden de compra wall',
              url: '/app/tesoreria/form-oc-wall'
            },
            {
              label: 'Pago de reembolso de caja chcia',
              url: '/app/tesoreria/form-remb-c-ch'
            },
            {
              label: 'Pago de reembolsos de gastos de Wallgrow (INCLAMEX y TC de Wallgrow y personales)',
              url: '/app/tesoreria/form-remb-gtos'
            },
            {
              label: 'Traspaso interbancario entre compañias de Wallgrow',
              url: '/app/tesoreria/form-trsp-interc'
            },
            {
              label: 'Traspaso interbancario entre cuetnas propias de una misma compañia de Wallgrow',
              url: '/app/tesoreria/form-trsp-prop'
            },
            {
              label: 'Cobro en devolución de préstamos otorgados',
              url: '/app/tesoreria/form-cobro-ptmo'
            },
            {
              label: 'Cobro por devolucion total o parcial de fondo de caja chica',
              url: '/app/tesoreria/form-devol-c-ch'
            },
            {
              label: 'Cobro por devolución total o parcial de fondo de gastos por comprobar',
              url: '/app/tesoreria/form-devol-gxc'
            },
            {
              label: 'Cobro por devolución total o parcial de fondo de OC pagada anteroirmente a proveedor',
              url: '/app/tesoreria/form-devol-oc'
            },
            {
              label: 'Cobro por devolución total o parcial de fondo de pedido cobrado anteriormente a cliente',
              url: '/app/tesoreria/form-devol-pedido'
            },
            {
              label: 'Devolución de prima de gastos médicos mayores',
              url: '/app/tesoreria/form-devol-sgmm'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="sass">
.v-card
  display: grid
  @media only screen and (max-width: 480px)
    grid-auto-flow: row
    overflow-x: auto
    grid-template-columns: repeat(6, 100px)

</style>
