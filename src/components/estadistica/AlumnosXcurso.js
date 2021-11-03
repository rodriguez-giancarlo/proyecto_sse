import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const AlumnosXcurso = ({Matriculados}) => {
    return (
        <>
        <h4>Alumnos Matriculados por Curso</h4>
           <ResponsiveContainer width="100%" height="70%">
                <BarChart
                    // width={700}
                    // height={200}
                    data={Matriculados}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    barSize={20}
                >
                <XAxis dataKey="nombre" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="matriculados" fill="#1f8fc3" background={{ fill: "#eee" }} />
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}

export default AlumnosXcurso
