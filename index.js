#!/usr/bin/env node
const program = require('commander');
// const download = require('download-git-repo');
const inquirer = require('inquirer');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols')
const shelljs = require('shelljs')
const fs = require('fs')
const path = require('path')
program
.version('1.0.0', '-v, --version')
.command('init <name>')
.alias('i')
.description('Generates new react+koa webapp')
.action((name) => {
  inquirer.prompt([
    {
        name: 'description',
        message: '请输入项目描述'
    },
    {
        name: 'author',
        message: '请输入作者名称'
    },
    {
        type: 'list',
        name: 'kuangjia',
        message: '选择搭配的node框架：',
        choices: [
            {
                name: 'KOA',
                value: 'KOA'
            },
            {
                name: 'KOA2',
                value: 'KOA2'
            },
            {
                name: 'express',
                value: 'express'
            },
            {
                name: 'egg',
                value: 'egg'
            }
        ]
    }
    ]).then((answers) => {
        let dath = path.resolve(__dirname, name)
        const spinner = ora('正在下载模板...');
        spinner.start();
        shelljs.exec(`git clone https://github.com/zhixiaoqiang/my-antd.git ${name}`)
        // download('zhixiaoqiang/my-antd#master', name, {clone: true}, (err) => {
        //     if (err) {
        //       console.log(err)
        //     } else {
        //     }
        // })
        console.log(`项目名称:${name},项目描述:${answers.description},作者名称:${answers.author},node框架:${answers.kuangjia}`)
        spinner.succeed();
        console.log(symbols.success, chalk.green('项目创建成功'));
    })
});


program.parse(process.argv);