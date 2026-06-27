import { Cpu, Activity, Database, Brain, BarChart3, Zap } from "lucide-react";

export default function AIMetrics() {

    const metrics = [

        {
            title: "Backend",
            value: "ONLINE",
            icon: <Activity className="text-emerald-400" size={28}/>
        },

        {
            title: "Model",
            value: "XGBoost v2",
            icon: <Cpu className="text-emerald-400" size={28}/>
        },

        {
            title: "Accuracy",
            value: "94.8%",
            icon: <BarChart3 className="text-emerald-400" size={28}/>
        },

        {
            title: "Features",
            value: "26",
            icon: <Database className="text-emerald-400" size={28}/>
        },

        {
            title: "Dataset",
            value: "1.4M Rows",
            icon: <Brain className="text-emerald-400" size={28}/>
        },

        {
            title: "Inference",
            value: "< 1 sec",
            icon: <Zap className="text-emerald-400" size={28}/>
        }

    ];

    return (

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 mt-14">

            {

                metrics.map((item,index)=>(

                    <div

                        key={index}

                        className="bg-white/5 border border-emerald-400/20 rounded-3xl p-6 hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300"

                    >

                        {item.icon}

                        <p className="text-zinc-500 mt-5">

                            {item.title}

                        </p>

                        <h2 className="text-xl font-bold mt-2">

                            {item.value}

                        </h2>

                    </div>

                ))

            }

        </div>

    );

}