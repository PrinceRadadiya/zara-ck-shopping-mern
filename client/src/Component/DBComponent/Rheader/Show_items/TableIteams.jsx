import React from 'react'
import MaterialTable from "material-table";
import {ThemeProvider ,createTheme} from "@mui/material"

const TableIteams = ({columns ,data,title,actions}) => {
    const defaultTheam = createTheme()
  return (
    <div className="mt-10 w-auto h-auto overflow-hidden">

    <ThemeProvider theme={defaultTheam}>
    <MaterialTable
      columns={columns}
      data={data}
      title={title}
      actions={actions}
    />
    </ThemeProvider>
    </div>
  )
}

export default TableIteams