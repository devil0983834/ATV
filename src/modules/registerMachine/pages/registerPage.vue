<script setup>
import { ref, onMounted } from 'vue'

// Dữ liệu mock từ 2 "database"
const platforms = ref([])
const devices = ref([])

// Dữ liệu bảng
const tableData = ref([
  { selectedPlatform: null, selectedDevice: null, contractor: '', note: '' }
])

// Load dữ liệu giả lập API
onMounted(() => {
  platforms.value = [
    { id: 'P1', name: 'Platform A' },
    { id: 'P2', name: 'Platform B' }
  ]
  devices.value = [
    { id: 'D1', name: 'Device X' },
    { id: 'D2', name: 'Device Y' }
  ]
})

// Cấu hình các cột cho BaseTable
const columns = ref([
  {
    field: 'selectedPlatform',
    header: 'Platform',
    type: 'select',
    options: platforms,
    optionLabel: 'name'
  },
  {
    field: 'selectedDevice',
    header: 'Device',
    type: 'select',
    options: devices,
    optionLabel: 'name'
  },
  {
    field: 'contractor',
    header: 'Tên Nhà thầu',
    type: 'text'
  },
  {
    field: 'note',
    header: 'Ghi chú',
    type: 'text'
  },
  {
    field: 'action',
    header: 'Hành động',
    type: 'button',
    buttonLabel: 'Xóa',
    buttonAction: 'remove'
  }
])

// Thêm dòng mới
const addRow = () => {
  tableData.value.push({ selectedPlatform: null, selectedDevice: null, contractor: '', note: '' })
}

// Xử lý nút xóa dòng
const handleRowAction = ({ action, rowIndex }) => {
  if (action === 'remove') {
    tableData.value.splice(rowIndex, 1)
  }
}

// Submit dữ liệu
const submitData = () => {
  const payload = tableData.value.map(row => ({
    platformId: row.selectedPlatform?.id || '',
    deviceId: row.selectedDevice?.id || '',
    contractor: row.contractor,
    note: row.note
  }))
  console.log('Payload gửi lên server:', payload)
  alert('Đã gửi dữ liệu! Kiểm tra console.')
}
</script>

<template>
  <div class="card">
    <h1 class="text-3xl font-bold mb-4">REGISTER Dashboard</h1>

    <BaseTable
      title="Device Registration"
      :columns="columns"
      :row-data="tableData"
      @row-action="handleRowAction"
    />

    <br />
    <button @click="addRow">➕ Thêm dòng</button>
    <button @click="submitData">💾 Submit</button>

    <pre>{{ tableData }}</pre>
  </div>
</template>

<style scoped>
.card {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
select, input {
  width: 100%;
  box-sizing: border-box;
  padding: 6px;
}
button {
  cursor: pointer;
  padding: 6px 12px;
}
</style>