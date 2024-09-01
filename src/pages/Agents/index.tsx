import { Card, Col, Input, Row } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import CardContainer from "../../components/CardContainer"
import useHttp from "../../hooks/useHttp"
import AgentModal from "./AgentModal.tsx"
import { Agent } from "./Agents.interfaces"

const Agents = () => {
  const [agents, setAgents] = useState<Agent[]>([])
  const [filteredAgents, setFilteredAgents] = useState<Agent[]>([])
  const { http } = useHttp()
  const [open, setOpen] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)
  const fetchAgents = async () => {
    const response = await http.get('/agents')
    setAgents(response.data.data)
    setFilteredAgents(response.data.data)
  }

  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchAgents()
  }, [])

  useEffect(() => {
    const filtered = agents.filter(agent => agent.displayName.toLowerCase().includes(search.toLowerCase()))
    setFilteredAgents(filtered)
  }, [search, agents])

  const handleAgentClick = (agent: Agent) => {
    setSelectedAgent(agent)
    setOpen(true)
  }

  return (
    <CardContainer>
      <AgentModal open={open} setOpen={setOpen} selectedAgent={selectedAgent} />
      
      <div className="content">
        <Row style={{ marginRight: '16px' }}>
          <Col span={12}>
            <h1>Agentes</h1>
          </Col>
          <Col span={12}>
            <Input placeholder="Pesquisar" addonBefore={<SearchOutlined />} value={search} onChange={(e) => setSearch(e.target.value)} />
          </Col>
        </Row>
        
        <Row gutter={16} style={{ width: '100%' }}>
          {filteredAgents.filter(agent => agent.displayName.toLowerCase().includes(search.toLowerCase())).map((agent) => (
            <Col span={4} style={{ marginTop: '16px', cursor: 'pointer' }} onClick={() => handleAgentClick(agent)} key={agent.uuid}>
              <Card style={{ background: '#000a', border: 'none'}} key={agent.uuid}>
                <img width={'100%'} src={agent.displayIcon} alt={agent.displayName} />
                <h2 style={{ color: '#bbb' }}>{agent.displayName}</h2>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </CardContainer>
  )
}

export default Agents