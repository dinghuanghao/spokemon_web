"use client"
import Image from 'next/image'
import ImageHeader from "@/app/ImageHeader";
import {MenuHeader} from "@/app/MenuHeader";
import {Breadcrumb, Card, Divider, Layout, Menu, theme} from 'antd';
import {Carousel} from 'antd';
import Wrapper from "@/app/wrapper";
import 'tailwindcss/tailwind.css'
import {Button, Flex} from 'antd';

const {Header, Content, Footer} = Layout;
const {Meta} = Card;

export default function Home() {
    let array = [];
    for (let i = 0; i < 28; i++) {
        array.push(i);
    }

    return (
        <Layout style={{minHeight: "100vh"}}>
            <MenuHeader/>
            <ImageHeader/>

            <div className="px-4 container max-w-5xl mx-auto">

                <h1 className="font-bold text-teal-800 text-xl pt-6">Popular Spokemons</h1>

                <h1 className="pt-3 border-b border-teal-800 "></h1>

                <h1 className="text-teal-800 pt-3">Use AI to generate unique partners, then fight through language</h1>
            </div>


            <Carousel className="px-4 mx-auto pt-5 max-w-5xl" autoplay slidesToShow={3} autoplaySpeed={2000}
                      infinite={true} dots={false}>
                {array.map(i => (
                    <div key={i} className="pl-1 pr-1">
                        <Card title="" hoverable bordered={false} cover={<img alt="" src={`/monsters/${i}.jpg`}/>}>
                            <h1 className="border-b border-black-100 "></h1>
                            <Meta className="text-teal-800 font-sans pt-4 " title="外卖火车侠"
                                  description="一个特别喜欢吃外卖的火车侠，整天没事就在吃外卖"/>
                        </Card>

                    </div>
                ))}
            </Carousel>


            <div className="flex pt-20 px-4 max-w-5xl space-x-4 mx-auto">
                    <Button className="w-screen font-semibold" type="primary" style={{backgroundColor: '#4682B4', height: 60, fontSize: 20}}>创建</Button>
                <Button className="w-screen font-semibold" type="primary" style={{backgroundColor: '#4682B4', height: 60, fontSize: 20}}>登录</Button>
            </div>

            <Footer style={{textAlign: 'center',  marginTop: 'auto'}}>
                言灵计划 ©{new Date().getFullYear()} Created by AgentLive
            </Footer>

        </Layout>
    )
}
