<template>
    <div class="pagination">
        <button :disabled="pageNo == 1" @click="pageNoHandler(pageNo - 1)">上一页</button>
        <button v-if="middlePages.start > 1" @click="pageNoHandler(1)" :class="{active: pageNo == 1}">1</button>
        <button v-if="middlePages.start > 2">···</button>
        <button v-for="(page, index) in middlePages.arr" :key="index" @click="pageNoHandler(page)" :class="{active: pageNo == page}">{{page}}</button>
        <button v-if="middlePages.end < middlePages.totalPage - 1">···</button>
        <button v-if="middlePages.end < middlePages.totalPage"  @click="pageNoHandler(middlePages.totalPage)" :class="{active: pageNo == middlePages.totalPage}">{{middlePages.totalPage}}</button>
        <button :disabled="pageNo == middlePages.totalPage" @click="pageNoHandler(pageNo + 1)">下一页</button>

        <button style="margin-left: 30px">共 {{total}} 条</button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: ['pageNo', 'pageSize', 'continues', 'total'],
    computed: {
        middlePages() {
            let {pageNo, pageSize, continues, total} = this
            let start = -1, end = -1
            let arr = [] 
            let totalPage = Math.ceil(total / pageSize)
            if (totalPage < continues) {
                start = 1
                end = totalPage
                let temp = start
                while (totalPage-- > 0) {
                    arr.push(temp++)
                }

            } else {
                start = pageNo - parseInt(continues / 2)
                end = pageNo + parseInt(continues / 2)
                if (start < 1) {
                    start = 1
                    end = continues
                }
                if (end > totalPage) {
                    start = totalPage - continues + 1
                    end = total
                }
                let temp = start
                while (continues-- > 0) {
                    arr.push(temp++)
                }
            } 
            return { start, end, arr, totalPage }
        }
    },
    methods: {
        pageNoHandler(page) {
            this.$emit('pageNoInfo', page)
        }
    },
}
</script>

<style lang="less" scoped>
.pagination {
    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &.active {
            cursor: not-allowed;
            background-color: #409eff;
            color: #fff;
        }
    }
}
</style>
