const Topic = require('../models/topics');
const User = require('../models/users');

class TopicsCtl {
    async find(ctx) {
        ctx.body = await Topic.find();
    }

    async checkTopicExist(ctx, next) {
        const topic = await Topic.findById(ctx.params.id);
        if (!topic) {
            ctx.throw(404, '话题不存在');
        }
        await next();
    }

    async findById(ctx) {
        const {fields = ''} = ctx.query;
        const selectFields = fields.split(';').filter(f => f).map(f => ' +' + f).join('');
        const topic = await Topic.findById(ctx.params.id).select(selectFields);
        ctx.body = topic;
    }

    async create(ctx) {
        ctx.verifyParams({
            name: {type: 'string', required: true},
            avatar_url: {type: 'string', required: false},
            introduction: {type: 'string', required: false},
        });
        const topic = await new Topic(ctx.request.body).save();
        ctx.body = topic;
    }

    async update(ctx) {
        ctx.verifyParams({
            name: {type: 'string', required: false},
            avatar_url: {type: 'string', required: false},
            introduction: {type: 'string', required: false},
        });
        const topic = await Topic.findByIdAndUpdate(ctx.params.id, ctx.request.body);
        ctx.body = topic;
    }

    // async listFollowers(ctx) {
    //     const users = await User.find({followingTopics: ctx.params.id});
    //     ctx.body = users;
    // }
    //
    // async listQuestions(ctx) {
    //     const questions = await Question.find({topics: ctx.params.id});
    //     ctx.body = questions;
    // }
}

module.exports = new TopicsCtl();