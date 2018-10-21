import './css/jquery.dataTables.css'
import React, { Component } from 'react'
import $ from 'jquery'
import dt from 'datatables.net'
$.DataTable = dt

export class Tbl extends Component {
    componentDidMount() {
        this.$el = $(this.el)
        this.$el.DataTable = dt
        this.$el.DataTable({
                data: this.props.data,
                columns: [
                    { title: "Name" },
                    { title: "Position" },
                    { title: "Office" },
                    { title: "Extn." },
                    { title: "Start date" },
                    { title: "Salary" }
                ]
            }
        )
    }
    componentWillUnmount() {
        this.$el.DataTable.destroy(true)
    }
    render() {
        return <div>
            <table className="display" width="100%" ref={el => this.el = el}>
            </table>
        </div>
    }
}
export var junk;