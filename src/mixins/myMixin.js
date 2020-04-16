export default {
  methods: {
    createToken() {
      
      let len = 24
      let p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_*";
      let token =  [...Array(len)].reduce(a => a + p[~~(Math.random() * p.length)], "");

      return token
    },
  },
}