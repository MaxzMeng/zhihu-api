class UsersCtl {
    find(ctx) {
        ctx.throw (412);
        ctx.body = "hahaha"
    }

    findById(ctx) {
        console.log(ctx.params.id);
        ctx.body = "hahaha"
    }

    create(ctx) {
        ctx.body = "hahaha"
    }

    update(ctx) {
        console.log(ctx.params.id);
        ctx.body = "hahaha"
    }

    delete(ctx) {

    }
}

module.exports = new UsersCtl();