<template>
<div class="app-container">
    <div class="filter-container">
        <el-input @keyup.enter.native="handleFilter" style="width: 150px; margin-left: 10px;" class="filter-item" :placeholder="$t('system.user.number')" v-model="listQuery.number"/>
        <el-input @keyup.enter.native="handleFilter" style="width: 150px; margin-left: 10px;" class="filter-item" :placeholder="$t('system.user.name')" v-model="listQuery.name"/>
        <el-input @keyup.enter.native="handleFilter" style="width: 150px; margin-left: 10px;" class="filter-item" :placeholder="$t('system.user.phone')" v-model="listQuery.phone"/>
        <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" @click="handleFilter">{{$t('table.search')}}</el-button>
        <el-button class="filter-item" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">{{$t('table.add')}}</el-button>
        <el-button class="filter-item" type="primary" :loading="downloadLoading" v-waves icon="el-icon-download" @click="handleDownload">{{$t('table.export')}}</el-button>
    </div>

    <el-table :key='tableKey' :data="list" v-loading="listLoading" border fit highlight-current-row style="width: 100%;min-height:100%;">
        <el-table-column align="center" :label="$t('table.id')" width="65">
            <template slot-scope="scope">
                <span>{{scope.row.id}}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" :label="$t('system.user.number')" width="120">
            <template slot-scope="scope">
                <span>{{scope.row.number}}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" :label="$t('system.user.name')" width="120">
            <template slot-scope="scope">
                <span>{{scope.row.name}}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" :label="$t('system.user.sex')" width="120">
            <template slot-scope="scope">
                <span>{{scope.row.sex}}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" :label="$t('system.user.age')" width="120">
            <template slot-scope="scope">
                <span>{{scope.row.age}}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" :label="$t('system.user.phone')" width="120">
            <template slot-scope="scope">
                <span>{{scope.row.phone}}</span>
            </template>
        </el-table-column>
        <el-table-column class-name="status-col" :label="$t('table.status')" width="100">
            <template slot-scope="scope">
                <el-tag :type="scope.row.state | statusFilter">{{scope.row.state}}</el-tag>
            </template>
        </el-table-column>

        <!--操作-->
        <el-table-column align="center" :label="$t('table.actions')" width="230" class-name="small-padding fixed-width">
            <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">{{$t('table.edit')}}</el-button>
                <el-button type="primary" size="mini" @click="handleDetail(scope.row,'detail')">{{$t('table.detail')}}</el-button>
                <el-button type="success" v-if="scope.row.state!='1'" size="mini" @click="handleModifyStatus(scope.row,'1')">{{$t('table.enabled')}}</el-button>
                <el-button type="danger" v-if="scope.row.state!='0'" size="mini" @click="handleModifyStatus(scope.row,'0')">{{$t('table.disable')}}</el-button>
            </template>
        </el-table-column>
    </el-table>

    <div class="pagination-container">
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.pageNum" :page-sizes="[10,20,30, 50]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
    </div>


    <!-- 弹窗 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
        <el-form :rules="rules" ref="dataForm" :model="temp" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
            <el-form-item :label="$t('system.user.name')" prop="name">
                <el-input v-model="temp.name"></el-input>
            </el-form-item>
            <el-form-item :label="$t('system.user.sex')" prop="sex">
                <el-input v-model="temp.sex"></el-input>
            </el-form-item>
            <el-form-item :label="$t('system.user.age')" prop="age">
                <el-input v-model="temp.age"></el-input>
            </el-form-item>
            <el-form-item :label="$t('system.user.phone')" prop="phone">
                <el-input v-model="temp.phone"></el-input>
            </el-form-item>
            <el-form-item :label="$t('table.status')" prop="status">
                <el-input v-model="temp.state"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">{{$t('table.cancel')}}</el-button>
            <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">{{$t('table.confirm')}}</el-button>
            <el-button v-else type="primary" @click="updateData">{{$t('table.confirm')}}</el-button>
        </div>
    </el-dialog>




    <el-dialog title="Reading statistics" :visible.sync="dialogPvVisible">
        <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
            <el-table-column prop="key" label="Channel"> </el-table-column>
            <el-table-column prop="pv" label="Pv"> </el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">{{$t('table.confirm')}}</el-button>
      </span>
    </el-dialog>

</div>
</template>

<script>
import {
    getDatas,
    getData,
    postData,
    patchData
} from "@/api/user"
import waves from "@/directive/waves" // 水波纹指令
import {
    parseTime
} from "@/utils"

const calendarTypeOptions = [{
        key: "CN",
        display_name: "China"
    },
    {
        key: "US",
        display_name: "USA"
    },
    {
        key: "JP",
        display_name: "Japan"
    },
    {
        key: "EU",
        display_name: "Eurozone"
    }
]

// arr to obj ,such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
    acc[cur.key] = cur.display_name
    return acc
}, {})

export default {
    name: "complexTable",
    directives: {
        waves
    },
    data() {
        return {
            tableKey: 0,
            list: null,
            total: null,
            listLoading: true,
            listQuery: {
                pageNum: 1,
                pageSize: 10,
                number: undefined,
                name: undefined,
                sex: undefined,
                age: undefined,
                phone: undefined,
                state: undefined
                //sort: "+id"
            },
            departmentOptions: [1, 2, 3],
            positionOptions: [1, 2, 3],
            calendarTypeOptions,
            sortOptions: [{
                    label: "ID Ascending",
                    key: "+id"
                },
                {
                    label: "ID Descending",
                    key: "-id"
                }
            ],
            statusOptions: ["enabled", "disable"],
            showReviewer: false,
            temp: {
                id: undefined,
                name:'',
                sex:'',
                age:'',
                phone:'',
                state: "1"
            },
            dialogFormVisible: false,
            dialogStatus: "",
            textMap: {
                update: "Edit",
                create: "Create"
            },
            dialogPvVisible: false,
            pvData: [],
            rules: {
                type: [{
                    required: true,
                    message: "type is required",
                    trigger: "change"
                }],
                timestamp: [{
                    type: "date",
                    required: true,
                    message: "timestamp is required",
                    trigger: "change"
                }],
                title: [{
                    required: true,
                    message: "title is required",
                    trigger: "blur"
                }]
            },
            downloadLoading: false
        }
    },
    filters: {
        statusFilter(status) {
            const statusMap = {
                "1": "success",
                "0": "danger"
            }
            return statusMap[status]
        },
        typeFilter(type) {
            return calendarTypeKeyValue[type]
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            this.listLoading = true
            getDatas(this.listQuery).then(response => {
                this.list = response.data.result.data
                this.total = response.data.result.total
                // Just to simulate the time of the request
                setTimeout(() => {
                    this.listLoading = false
                }, 1 * 1000)
            })
        },
        handleFilter() {
            this.listQuery.pageNum = 1
            this.getList()
        },
        handleSizeChange(val) {
            this.listQuery.pageSize = val
            this.getList()
        },
        handleCurrentChange(val) {
            this.listQuery.pageNum = val
            this.getList()
        },
        handleModifyStatus(row, state) {
            this.$message({
                message: "操作成功",
                type: "success"
            })
            row.state = state
        },
        resetTemp() {
            this.temp = {
                id: undefined,
                name: "",
                sex: "",
                age: "",
                phone: "",
                state: "enabled"
            }
        },
        handleCreate() {
            this.resetTemp()
            this.dialogStatus = "create"
            this.dialogFormVisible = true
            this.$nextTick(() => {
                this.$refs["dataForm"].clearValidate()
            })
        },
        createData() {
            this.$refs["dataForm"].validate(valid => {
                if (valid) {
                    postData(this.temp).then(() => {
                        this.list.unshift(this.temp)
                        this.dialogFormVisible = false
                        this.$notify({
                            title: "成功",
                            message: "创建成功",
                            type: "success",
                            duration: 2000
                        })
                    })
                }
            })
        },
        handleDetail(row) {},
        handleUpdate(row) {
            this.temp = Object.assign({}, row) // copy obj
            this.temp.timestamp = new Date(this.temp.timestamp)
            this.dialogStatus = "update"
            this.dialogFormVisible = true
            this.$nextTick(() => {
                this.$refs["dataForm"].clearValidate()
            })
        },
        handleQuery(row) {
            this.temp = Object.assign({}, row) // copy obj
            this.temp.timestamp = new Date(this.temp.timestamp)
            this.dialogStatus = "update"
            this.dialogFormVisible = true
            this.$nextTick(() => {
                this.$refs["dataForm"].clearValidate()
            })
        },
        updateData() {
            this.$refs["dataForm"].validate(valid => {
                if (valid) {
                    const tempData = Object.assign({}, this.temp)
                    tempData.timestamp = +new Date(tempData.timestamp)
                    patchData(tempData).then(() => {
                        for (const v of this.list) {
                            if (v.id === this.temp.id) {
                                const index = this.list.indexOf(v)
                                this.list.splice(index, 1, this.temp)
                                break
                            }
                        }
                        this.dialogFormVisible = false
                        this.$notify({
                            title: "成功",
                            message: "更新成功",
                            type: "success",
                            duration: 2000
                        })
                    })
                }
            })
        },
        handleDelete(row) {
            this.$notify({
                title: "成功",
                message: "删除成功",
                type: "success",
                duration: 2000
            })
            const index = this.list.indexOf(row)
            this.list.splice(index, 1)
        },
        handleFetchPv(pv) {
            fetchPv(pv).then(response => {
                this.pvData = response.data.pvData
                this.dialogPvVisible = true
            })
        },
        handleDownload() {
            this.downloadLoading = true
            import ("@/vendor/Export2Excel").then(excel => {
                const tHeader = ["timestamp", "title", "type", "importance", "status"]
                const filterVal = [
                    "timestamp",
                    "title",
                    "type",
                    "importance",
                    "status"
                ]
                const data = this.formatJson(filterVal, this.list)
                excel.export_json_to_excel({
                    header: tHeader,
                    data,
                    filename: "table-list"
                })
                this.downloadLoading = false
            })
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v =>
                filterVal.map(j => {
                    if (j === "timestamp") {
                        return parseTime(v[j])
                    } else {
                        return v[j]
                    }
                })
            )
        }
    }
}
</script>
