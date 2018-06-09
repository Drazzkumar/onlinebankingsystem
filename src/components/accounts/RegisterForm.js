import React from 'react'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import './form.css'

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
    value: 'kathmandu',
    label: 'Kathmandu',
    children: [{
        value: 'new_baneshwor',
        label: 'New Baneshwor',
        children: [{
            value: 'samgamchok',
            label: 'Samgam Chock',
        }],
    }],
}, {
    value: 'bhakatapur',
    label: 'Bhakatapur',
    children: [{
        value: 'Balkot',
        label: 'Balkot'
    }],
}];

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        user: {
            fullname: "",
            email: "",
            password: "",
            username: "",
            address: "",
            phone: ""
        }
    };



    postData = (url, data) => {
        // Default options are marked with *
        return fetch(url, {
            body: JSON.stringify(data), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        })
            .then(response => response.json()) // parses response to JSON
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        const { user } = this.state;
        this.postData('/register', user)
            .then(data => console.log(data)) // JSON from `response.json()` call
            .catch(error => console.error(error))
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    inputHandler = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        const { user } = this.state;
        user[name] = value
        this.setState({ user })

    }
    inputAddressHandler = (a) => {
        let b = a.join(",");
        const { user } = this.state;
        user["address"] = b;
        this.setState({ user })

    }

    render() {
        const { getFieldDecorator } = this.props.form;
        console.log("THE USER ", this.state.user);

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 75 }}>
                <Option value="86">+977</Option>
                <Option value="87">+1</Option>
            </Select>
        );

        return (
            <Form onSubmit={this.handleSubmit} layout="horizontal" id="registration">
                <FormItem {...formItemLayout} label="Full Name">
                    {getFieldDecorator('text', {
                        rules: [{
                            required: true, message: 'Please input your Full Name!',
                        }],
                    })(
                        <Input onChange={this.inputHandler} name="fullname" />
                    )}
                </FormItem>

                <FormItem {...formItemLayout} label="E-mail">
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input onChange={this.inputHandler} name="email" />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Password"
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Please input your password!',
                        }, {
                            validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input onChange={this.inputHandler} type="password" name="password" />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Confirm Password"
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'Please confirm your password!',
                        }, {
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}

                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Nickname&nbsp;
                    <Tooltip title="What do you want others to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    )}
                >
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(
                        <Input onChange={this.inputHandler} name="username" />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Habitual Residence"
                >
                    {getFieldDecorator('residence', {
                        initialValue: ['kathmandu', 'new_baneshwor', 'samgamchok'],
                        rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                    })(
                        <Cascader options={residences} onChange={this.inputAddressHandler} name="address" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Phone Number"
                >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(
                        <Input onChange={this.inputHandler} name="phone" addonBefore={prefixSelector} style={{ width: '100%' }} />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Register</Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(RegistrationForm);